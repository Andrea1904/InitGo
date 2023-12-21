export const successResponse = (data) => {
  return {
    success: true,
    payload: data
  }
};

export const errorResponse = (message, error = null) => {
  return {
    success: false,
    description: message,
    details: error
  }
};