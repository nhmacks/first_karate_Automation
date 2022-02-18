function fn() {
  var env = karate.env; // get system property 'karate.env'
  var pass = karate.pass;
  karate.log('karate.env system property was:', env);
  karate.log('karate.pass system property was:', pass);
  if (!env) {
    env = 'DEV';
  }
  var config = {
      env: env,
      myVarName: 'SomeValue',
      username: 'admin',
      password:  'admin1'
  }
  if (env == 'DEV') {
    config.username = 'mnunez'
    config.password = 'mnunez1'
  } else if (env == 'QA') {
    config.username = 'user'
    config.password = 'user1'
  }
  return config;
}