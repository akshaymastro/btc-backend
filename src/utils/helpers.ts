/* eslint-disable @typescript-eslint/ban-types */
import * as bcrypt from 'bcrypt';
import * as Jwt from 'jsonwebtoken';

export const EncryptPassword = (password: string) => {
  let hashpassword;
  const generatedPassword = bcrypt.genSalt(10, function (saltError, salt) {
    if (saltError) {
      return saltError;
    } else {
      bcrypt.hash(password, salt, function (hashError, hash) {
        if (hashError) {
          return hashError;
        }

        hashpassword = hash;
        return hashpassword;
      });
    }
  });
  console.log(generatedPassword);
  return generatedPassword;
};

export const ComparePassword = (bodyPassword: string, userpasword: string) => {
  bcrypt.compare(bodyPassword, userpasword, function (err, result) {
    if (err) {
      return err;
    } else {
      return true;
    }
  });
};

export const TokenGeneration = async (user: Object) => {
  const token = await Jwt.sign(user, '12345');
  return token;
};
