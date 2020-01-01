module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/admin-manager": { page: "/admin-manager" },
      "/children-manager": { page: "/children-manager" },
      "/dashboard": { page: "/dashboard" },
      "/login": { page: "/login" },
      "/report": { page: "/report" },
      "/term-manager": { page: "/term-manager" },
      "/attendance-manager": { page: "/attendance-manager" },
      "/church-manager": { page: "/church-manager" },
      "/notification-manager": { page: "/notification-manager" },
      "/logout": { page: "/logout" },
      "/service-manager": { page: "/service-manager" }
    };
  }
};
