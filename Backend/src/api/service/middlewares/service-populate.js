"use strict";

/**
 * `service-populate` middleware
 */

const populate = {};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In service-populate middleware.");

    await next();
  };
};
