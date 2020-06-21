// make sure to enclose the function in parentheses
(function(back) {
  
  const SETTINGS_FILE = 'miurli.settings.json';

  // initialize with default settings...
  let s = {
    'hourBeep' : 'yes',
  };
  // ...and overwrite them with any saved values
  // This way saved values are preserved if a new version adds more settings
  const storage = require('Storage');
  const saved = storage.readJSON(SETTINGS_FILE, 1) || {};
  for (const key in saved) {
    s[key] = saved[key];
  }
  // creates a function to safe a specific setting, e.g.  save('color')(1)
  function save(key) {
    return function (value) {
      s[key] = value;
      storage.write(SETTINGS_FILE, s);
      //WIDGETS["activepedom"].draw();
    };
  }
  const appMenu = {
    '': {'title': 'Mi Urli Settings'},
    '< Back': back,
    'Hour-Beep': {
      value: s.hourBeep,
      format: v => v?"Yes":"No",
      onchange: save('hourBeep'),}
    }   
  };
  E.showMenu(appMenu)
})
