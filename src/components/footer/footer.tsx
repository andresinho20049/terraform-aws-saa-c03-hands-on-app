import { NavBarLink } from '@/my-app/components/navbar/navbar-link';
import { LanguageType } from '@/my-app/hooks/use-languages';
import { pages } from '@/my-app/hooks/use-pages';
import Link from 'next/link';
import { CopyrightComponent, LinkCopyright } from './copyright';
import { FooterSectionComponent } from './footer-section';
import { badges } from '@/my-app/hooks/use-badges';
import { BadgeComponent } from './badge';

export type FooterComponentPropsType = {
  lang: LanguageType;
  dictionary: {
    pages: {
      home: string;
      about: string;
      contact: string;
    };
    footer: {
      section: {
        menu: string;
        about_us: string;
        badge: string;
      };
      shortDescription: string;
    };
  };
};

export const FooterComponent = ({
  lang,
  dictionary,
}: FooterComponentPropsType) => {
  return (
    <section className={`w-full bg-transparent`}>
      <div className='container mx-auto my-8'>
        <div className='flex flex-col space-y-8 divide-y-2 divide-stone-800 md:divide-opacity-40'>
          {/* Site section */}
          <div className='flex justify-between divide-x divide-stone-800 divide-opacity-40 max-sm:flex-col'>
            <FooterSectionComponent title={dictionary.footer.section.menu}>
              <aside>
                <nav className='flex flex-col items-center gap-2'>
                  {pages.map((p) => (
                    <NavBarLink
                      key={p.href}
                      href={p.href}
                      label={
                        dictionary.pages[
                          p.labelKey as keyof typeof dictionary.pages
                        ]
                      }
                    />
                  ))}
                </nav>
              </aside>
            </FooterSectionComponent>
            <FooterSectionComponent title={dictionary.footer.section.about_us}>
              <p>{dictionary.footer.shortDescription}</p>
            </FooterSectionComponent>
            <FooterSectionComponent title={dictionary.footer.section.badge}>
              <div className='flex flex-wrap justify-around gap-4'>
                {badges.map((b) => (
                  <BadgeComponent key={b.src} {...b} />
                ))}
              </div>
            </FooterSectionComponent>
          </div>

          {/* Copyright section */}
          <div className='flex items-center justify-between pt-8 max-sm:flex-col max-sm:space-y-10'>
            <div className='flex flex-col items-center gap-2'>
              <Link href={'https://github.com/andresinho20049'}>
                <img
                  src='/logo/andresinho20049.png'
                  width={48}
                  height={48}
                  alt='Picture of the author'
                />
              </Link>
              <CopyrightComponent />
            </div>
            <aside>
              <nav className='flex items-end gap-8'>
                <LinkCopyright
                  href={
                    'https://github.com/andresinho20049/terraform-aws-saa-c03-hands-on-app/blob/main/SECURITY.md'
                  }
                >
                  Privacy Policy
                </LinkCopyright>
                <LinkCopyright
                  href={
                    'https://github.com/andresinho20049/terraform-aws-saa-c03-hands-on-app/blob/main/LICENSE'
                  }
                >
                  Terms & Conditions
                </LinkCopyright>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
