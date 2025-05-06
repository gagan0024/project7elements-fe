"use strict";

/**
 * `about-populate` middleware
 */

const populate = {
  blocks: {
    on: {
      "blocks.hero-banner": {
        populate: {
          cta: true,
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.card-grid": {
        populate: {
          aboutcards: true,
        },
      },
      "blocks.icon-card-section": {
        populate: {
          IconCard: {
            populate: {
              Icon: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = populate; // Use only ONE populate query
    strapi.log.info("In about-populate middleware.");
    await next();
  };
};
