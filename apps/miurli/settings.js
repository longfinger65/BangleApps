// make sure to enclose the function in parentheses
(function(back) {
  let settings = require('Storage').readJSON('miurli.json',1)||{};
  function save(key, value) {
    settings[key] = value;
    require('Storage').write('miurli.json',settings);
  }
  const appMenu = {
    '': {'title': 'App Settings'},
    '< Back': back,
    'Hour-Beep': {
      value: settings.hourBeep||12,
      onchange: (m) => {save('hourBeep', m)}
    }   
  };
  E.showMenu(appMenu)
})
