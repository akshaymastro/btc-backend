'use strict';

export const success = (res, message, code) => {
  res.status(code).json({
    is_success: true,
    message: message,
    responseCode: code,
  });
};
export const data = (res, item, code) => {
  res.status(code).json({
    is_success: true,
    data: item,
    responseCode: code,
  });
};
export const token = (res, item, code) => {
  res.status(code).json({
    is_success: true,
    token: item,
    responseCode: code,
  });
};
export const failure = (res, error, code) => {
  res.status(code).json({
    is_success: false,
    message: error.message ? error.message : error,
    responseCode: code,
  });
};

export const page = (res, items, total, page_no, code) => {
  res.status(code).json({
    is_success: true,
    data: {
      items: items,
      skip: page_no || 0,
      total: total || items.length,
    },
    responseCode: code,
  });
};
