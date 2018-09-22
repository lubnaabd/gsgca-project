const getStudentProjectQuery = require('../database/queries/getStudentProject');

exports.get = (request, response) => {
  const { id } = request.params;
  getStudentProjectQuery(id, (err, res) => {
    if (err) {
      return response.render('projectPageWebsite', {
        err: 'There are No Project!',
        layout: 'webSite',
        styleFile: 'projectWebsite',
        jsFile: 'cohortPageWebsite',
      });
    }
    return response.render('projectPageWebsite', {
      res,
      title: `Code Acadmy | ${res.projectResult[0].name}`,
      layout: 'webSite',
      styleFile: 'projectWebsite',
      jsFile: 'cohortPageWebsite',
    });
  });
};
