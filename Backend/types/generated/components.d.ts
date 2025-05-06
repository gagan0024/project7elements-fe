import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_grids';
  info: {
    description: '';
    displayName: 'About CardGrid';
    icon: 'bulletList';
  };
  attributes: {
    aboutcards: Schema.Attribute.Component<'shared.about-what-do', true>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface BlocksHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
    icon: 'globe';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.links', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksIconCardSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icon_card_sections';
  info: {
    description: '';
    displayName: 'Icon Card Section';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    IconCard: Schema.Attribute.Component<'shared.card-with-icon', true>;
    Title: Schema.Attribute.String;
  };
}

export interface BlocksSingleTitleGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_single_title_grids';
  info: {
    displayName: 'SingleTitleGrid';
  };
  attributes: {
    SectionTitle: Schema.Attribute.String;
    singletitle: Schema.Attribute.Component<'shared.title-grid', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.links', true>;
    logo: Schema.Attribute.Component<'shared.logo-link', false>;
    navitems: Schema.Attribute.Component<'shared.links', true>;
  };
}

export interface SharedAboutWhatDo extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_what_dos';
  info: {
    description: '';
    displayName: 'AboutWhatDo';
    icon: 'bulletList';
  };
  attributes: {
    CardDescription: Schema.Attribute.Blocks;
    CardTitle: Schema.Attribute.String;
    CardType: Schema.Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface SharedCardWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_with_icons';
  info: {
    displayName: 'Card With Icon';
    icon: 'landscape';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.String;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedTitleGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_grids';
  info: {
    displayName: 'Title Grid';
    icon: 'apps';
  };
  attributes: {
    SingleTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-grid': BlocksCardGrid;
      'blocks.hero-banner': BlocksHeroBanner;
      'blocks.icon-card-section': BlocksIconCardSection;
      'blocks.single-title-grid': BlocksSingleTitleGrid;
      'layout.header': LayoutHeader;
      'shared.about-what-do': SharedAboutWhatDo;
      'shared.card-with-icon': SharedCardWithIcon;
      'shared.links': SharedLinks;
      'shared.logo-link': SharedLogoLink;
      'shared.title-grid': SharedTitleGrid;
    }
  }
}
