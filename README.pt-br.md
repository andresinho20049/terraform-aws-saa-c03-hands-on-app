# Projeto Hands-On: Terraform com AWS para a Certificação SAA-C03

Este repositório é um projeto prático ("hands-on") criado com o objetivo de servir como material de estudo e demonstração de conhecimento para a **Certificação AWS Solutions Architect - Associate (SAA-C03)**. O foco é a automação de infraestrutura como código (IaC) utilizando **Terraform**, provisionando uma arquitetura moderna e escalável na AWS.


### 📚 Propósito do Projeto

O principal objetivo deste projeto é solidificar o conhecimento teórico da certificação AWS SAA-C03 por meio da prática. Ao invés de usar o console da AWS para provisionar os recursos, toda a infraestrutura é gerenciada pelo Terraform.

Este projeto demonstra:

* **Infraestrutura como Código (IaC):** O uso do Terraform para descrever e provisionar recursos de forma declarativa e repetível.
* **Melhores Práticas de AWS:** Configuração de uma arquitetura segura e de baixo custo para hospedar um site estático.
* **Automação de CI/CD:** O uso do GitHub Actions para criar um pipeline de entrega contínua, automatizando o build e o deploy da aplicação.


### 🚀 Arquitetura da Solução

A arquitetura provisionada pelo Terraform é robusta e utiliza serviços gerenciados da AWS para garantir alta disponibilidade, escalabilidade e performance.


* **Amazon S3 (Simple Storage Service):** O bucket S3 é o ponto central para o armazenamento do site estático. Ele é configurado com a opção de *Static Website Hosting* ativada.
* **Amazon CloudFront:** Atuando como uma rede de distribuição de conteúdo (CDN), o CloudFront distribui o conteúdo do S3 globalmente, reduzindo a latência para os usuários. Ele também adiciona uma camada de segurança e cache, otimizando o carregamento da página.
* **GitHub Actions:** O pipeline de CI/CD no GitHub automatiza o processo de build do projeto Next.js e o deploy dos arquivos estáticos para o bucket S3, garantindo que o site esteja sempre atualizado com a última versão do código.

### 💻 Tecnologias Utilizadas

* **Terraform:** Ferramenta de IaC para provisionar e gerenciar a infraestrutura na AWS.
* **AWS:** Provedor de serviços de nuvem.
* **Next.js (com App Router):** Framework de React.js utilizado para construir a aplicação estática, que será gerada com `output: 'export'`.
* **Node.js:** Ambiente de execução para o build do projeto Next.js.
* **GitHub Actions:** Serviço de CI/CD para automação de workflow.


### ⚙️ Como a Automação Funciona

Este projeto otimiza o deploy da sua infraestrutura e site estático na AWS através de um pipeline automatizado de **CI/CD**. Veja como ele funciona:

1.  **Desenvolvimento da Infraestrutura:** Você define ou atualiza sua infraestrutura AWS usando **Terraform** nos arquivos `.tf` localizados no diretório `infra/` do repositório.
2.  **Commit e Push:** Ao realizar um `git commit` e `git push` para o repositório remoto, o pipeline do GitHub Actions é automaticamente acionado.
3.  **Execução do Pipeline GitHub Actions:**
    * O workflow inicia, efetuando o **checkout** do seu código.
    * Ele assume uma **Role IAM** específica na sua conta AWS, garantindo acesso seguro via **OIDC**.
    * Executa `terraform init`, que configura o **backend S3** para armazenamento do **statefile** e a **tabela DynamoDB** para **state locking**, prevenindo conflitos.
    * Realiza `terraform plan` para gerar e exibir um resumo das mudanças propostas para sua infraestrutura.
    * Executa `terraform apply --auto-approve` para aplicar essas mudanças, provisionando ou atualizando os recursos na AWS.
    * **Build do Next.js:** O pipeline instala as dependências do Node.js e executa o comando `npm run build` do Next.js.
    * **Upload de Conteúdo:** Após o build, os arquivos do seu site estático (localizados em `src/out/`) são sincronizados para o **bucket S3** usando `aws s3 sync --delete`, garantindo que seu site esteja sempre atualizado e acessível.
4.  **Infraestrutura e Site Atualizados:** Sua infraestrutura na AWS é provisionada ou atualizada conforme as configurações do Terraform, e seu site estático fica imediatamente disponível.


### 🎯 Como Executar

Este projeto utiliza **Terraform** para provisionar a infraestrutura e **GitHub Actions** para automação de CI/CD, garantindo um deploy de site estático na AWS. Siga os passos abaixo para configurá-lo e executá-lo em seu ambiente:

#### 1. Pré-requisitos na AWS

Antes de iniciar, certifique-se de que sua conta AWS esteja configurada com os seguintes recursos:

* **Provider OIDC para GitHub Actions:** Configure um provedor de identidade (OIDC) no AWS IAM para permitir que o GitHub Actions assuma uma **Role IAM** de forma segura. Para um guia detalhado, consulte a documentação oficial da AWS: [Use IAM roles to connect GitHub Actions to actions in AWS](https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/).
* **Role IAM Dedicada:** Crie uma Role IAM específica para o GitHub Actions. Ela precisará das **políticas de permissão necessárias** para gerenciar todos os recursos da sua infraestrutura, incluindo:
    * **S3:** Criar e configurar buckets, gerenciar objetos.
    * **DynamoDB:** Criar e acessar tabelas de lock para o Terraform.
    * **CloudFront:** Criar, configurar e gerenciar distribuições, OACs (Origin Access Controls) e políticas de cache.
* **Bucket S3 para Statefile:** Tenha um bucket S3 previamente criado e dedicado ao armazenamento do seu **Terraform Statefile**. Este bucket é crucial para o gerenciamento de estado da sua infraestrutura e deve ter o **versionamento habilitado** para possibilitar rollbacks.
* **Tabela DynamoDB para State Locking:** Crie uma tabela no DynamoDB para ser utilizada como um mecanismo de **lock de estado** pelo Terraform. Isso evita que múltiplas execuções do Terraform corrompam o `statefile` em ambientes colaborativos. A tabela deve ter uma **Partition Key** chamada `LockID` do tipo `String`.


#### 2. Configuração do Repositório GitHub

Após configurar sua conta AWS, você precisará configurar as secrets no seu repositório GitHub para que o pipeline do GitHub Actions possa interagir com a AWS.

Navegue até **Settings** > **Secrets and variables** > **Actions** no seu repositório GitHub e adicione as seguintes secrets:

* `AWS_ROLE_ARN`: O ARN da Role IAM que o GitHub Actions irá assumir (ex: `arn:aws:iam::123456789012:role/github-actions-role`).
* `AWS_STATEFILE_S3_BUCKET`: O nome do bucket S3 onde seu Terraform Statefile será armazenado.
* `AWS_LOCK_DYNAMODB_TABLE`: O nome da tabela DynamoDB configurada para o lock de estado do Terraform.


#### 3. Acompanhe o Pipeline:
Após o `git push`, o pipeline do GitHub Actions será executado automaticamente. Você pode acompanhar o progresso na aba **Actions** do seu repositório GitHub. O pipeline irá provisionar ou atualizar a infraestrutura na AWS e, em seguida, fazer o upload dos arquivos do seu site estático para o bucket S3 configurado.


### ©️ Copyright

**Desenvolvido por** [Andresinho20049](https://andresinho20049.com.br/) \
**Projeto:** *terraform-aws-saa-c03-hands-on-app*

**Descrição:**
Este projeto é uma demonstração prática para a certificação AWS Solutions Architect - Associate (SAA-C03), com foco na implementação de uma arquitetura serverless. Ele utiliza Terraform para provisionar e gerenciar um site estático na AWS, explorando serviços como S3 e CloudFront, que garantem alta escalabilidade e baixo custo sem a necessidade de gerenciar servidores.

O projeto complementa outro trabalho de portfólio disponível em [terraform-aws-with-autoscaling-course](https://github.com/andresinho20049/terraform-aws-with-autoscaling-course). Enquanto este projeto aborda soluções serverless, o outro foca em arquiteturas provisionadas, utilizando serviços como VPC, EC2 e Application Load Balancer para demonstrar o design de soluções maiores, complexas e com alta disponibilidade.

Juntos, os dois projetos mostram um entendimento abrangente das arquiteturas fundamentais da AWS. Eles servem como um conjunto de estudos práticos que validam o conhecimento sobre a criação e implementação de sistemas robustos, cobrindo tanto modelos serverless quanto provisionados, essenciais para um arquiteto de soluções.