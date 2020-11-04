export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa33abff5c71120038f2e39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oh2mt3mv',
                  apiId: '7278c2a6-bf8a-4e4b-8a9f-579b92885cf1'
                },
                {
                  buildHookId: '5fa33abf3edcf11da13e3a6c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3gw6up9f',
                  apiId: '16afe92e-4fce-462c-bb5e-a2b97dd3381f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deweydell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3gw6up9f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
