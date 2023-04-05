/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require("dotenv").config();
const path = require("path");

const {
  DATABASE_URL = "postgres://rseqmtvo:N-HiqOC1Jr__31gG6s0B3REjkU9v9gaN@kashin.db.elephantsql.com/rseqmtvo",
  DATABASE_URL_DEVELOPMENT = "postgres://sjlotzxv:sOQ290UCX3OwVGkzmDB7WuAaZwprlkEG@kashin.db.elephantsql.com/sjlotzxv",
  DATABASE_URL_TEST = "postgres://hlhsdret:890W0yn1tgRsFPoq4wY1t2Pu2pVMRIc7@kashin.db.elephantsql.com/hlhsdret",
  DATABASE_URL_PREVIEW = "postgres://buzamtgk:WvS9OsAi40Xh6ZZSPMa2o5MgI8vokwM5@kashin.db.elephantsql.com/buzamtgk",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection:
      "postgres://gfngfhnl:d_wRr2kjuxCz_2xv3ajfuvdrT-uffI4-@peanut.db.elephantsql.com/gfngfhnl",
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
