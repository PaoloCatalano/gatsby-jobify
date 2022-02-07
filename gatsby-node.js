exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/dashboard` page.
  if (page.path.match(/^\/dashboard/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/dashboard/*"

    // Update the page.
    createPage(page)
  }
}
