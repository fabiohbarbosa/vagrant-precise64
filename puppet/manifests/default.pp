Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

# Example of conditionals
if $operatingsystem == 'Ubuntu' {
  notice('Cool! I like you')
}
elsif $operatingsystem == 'Windows' {
  warning('What the hell are you doing...')
}
else {
  notice("I dont know what to think about ${operatingsystem}. Its a ${osfamily}, isnt it?")
}

# Node
class { 'nodejs':
  version => 'stable',
}

class node_modules {
  package { 'express':
    provider => 'npm',
    require  => Class['nodejs']
  }

  package { 'mongoose':
    provider => 'npm',
    require  => Class['nodejs']
  }
}

# Include modules
include system-update
include nodejs
include stdlib
include wget
include ::mongodb::server
