import Component from '@glimmer/component';

export default class MainNavigationComponent extends Component {
  navLinks = [
    {
      linkRoute:'contact',
      linkName: 'Contact'
    },
    {
      linkRoute:'about',
      linkName: 'About'
    },
    {
      linkRoute:'libraries.show',
      linkName: 'Libraries'
    },
    {
      linkRoute:'authors',
      linkName: 'Authors'
    },
    {
      linkRoute:'books',
      linkName: 'Buy books'
    },
    {
      linkRoute:'shop',
      linkName: 'Cart'
    },
    
  ]

  dropDownLinks = {
    dropdownName: 'Admin',
    links: [
      {
        linkRoute: 'admin.invitations',
        linkName: 'Invitations'
      },
      {
        linkRoute: 'admin.messages',
        linkName: 'Messages'
      },
      {
        linkRoute: 'admin.invoices',
        linkName: 'Invoices'
      },
      {
        linkRoute: 'admin.newbook',
        linkName: 'Add Book'
      },
    ]
  }
}
