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
  };
  E.showMenu({
    '': {'title': 'Mi Urli Settings'},
    '< Back': back,
    'Hour-Beep': {
      value: s['hourBeep'],
      format: v => v?"yes":"no",
      onchange: v => require('Storage').write(SETTINGS_FILE, {'hourBeep': !v}),
    },
  })
})
