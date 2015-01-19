Exec { path => [ '/bin/', '/sbin/' , '/usr/bin/', '/usr/sbin/' ] }

# Node
class { 'nodejs':
  version => 'stable',
  with_npm => false,
}

# Install node modules to server
class node_modules {
  $node_packages = [  'npm', 'yo', 'bower', 'generator-express'  ]

  package { $node_packages:
    provider => 'npm',
    require  => Class['nodejs']
  }
}

# Mongodb
class mongo_databases {
  mongodb::db { 'development':
    user          => 'development',
    password      => 'development',
  }
  mongodb::db { 'test':
    user          => 'test',
    password      => 'test',
  }
    mongodb::db { 'production':
    user          => 'production',
    password      => 'production',
  }
}

class git {

}

class git_configurations {
  git::config { 'user.name':
    value => 'Fabio H. G. Barbosa',
  }

  git::config { 'user.email':
    value => 'fabiohbarbosa@gmail.com',
  }
}

class { 'git': }

# Include modules
include system-update

include stdlib
include wget
include nodejs
include node_modules

include ::mongodb::server
include mongo_databases

include git
#include git_configurations
