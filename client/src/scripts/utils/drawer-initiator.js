const drawerInitiator = {
  init({ button, drawer, content }) {
    button.addEvenListener('click', (event) => {
      this.toggleDrawer(event, drawer);
    });

    content.addEvenListener('click', (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default drawerInitiator;
