const fs = require('fs');
const crypto = require('crypto');
const util = require('util');
const Repository = require('./repositories');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
  async create(attrs) {
    attrs.id = this.randomId();

    const passwordtostring = String(attrs.password);

    const salt = crypto.randomBytes(8).toString('hex');
    const buf = await scrypt(passwordtostring, salt, 64);

    const records = await this.getAll();
    const record = {
      ...attrs,
      password: `${buf.toString('hex')}.${salt}`
    };
    records.push(record);

    await this.writeAll(records);

    return record;
  }
}

module.exports = new UsersRepository('users.json');