export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d1b42e2d3745ca06a0f3e82',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nwt7nuuh',
                  apiId: '4727c74e-e361-4ed0-8804-6ee497badbfa'
                },
                {
                  buildHookId: '5d1b42e2fbf19a5b8708e961',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ydf1vgmu',
                  apiId: '9e1940d5-e7c0-4227-9268-f551d451a221'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mstermaaten/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ydf1vgmu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
