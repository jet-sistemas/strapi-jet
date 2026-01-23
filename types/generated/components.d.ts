import type { Schema, Struct } from '@strapi/strapi';

export interface CompartilhadoCarrosel extends Struct.ComponentSchema {
  collectionName: 'components_compartilhado_carrosels';
  info: {
    displayName: 'Carrosel';
  };
  attributes: {
    arquivos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CompartilhadoCitacao extends Struct.ComponentSchema {
  collectionName: 'components_compartilhado_citacaos';
  info: {
    displayName: 'Citacao';
  };
  attributes: {
    corpo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface CompartilhadoMidia extends Struct.ComponentSchema {
  collectionName: 'components_compartilhado_midias';
  info: {
    displayName: 'Midia';
    icon: 'file';
  };
  attributes: {
    arquivo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CompartilhadoSeo extends Struct.ComponentSchema {
  collectionName: 'components_compartilhado_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface CompartilhadoTextoRico extends Struct.ComponentSchema {
  collectionName: 'components_compartilhado_texto_ricos';
  info: {
    displayName: 'Texto Rico';
  };
  attributes: {
    corpo: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'compartilhado.carrosel': CompartilhadoCarrosel;
      'compartilhado.citacao': CompartilhadoCitacao;
      'compartilhado.midia': CompartilhadoMidia;
      'compartilhado.seo': CompartilhadoSeo;
      'compartilhado.texto-rico': CompartilhadoTextoRico;
    }
  }
}
