module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '452e445cd738bf07fa72c9996b599fb9'),
  },
});
