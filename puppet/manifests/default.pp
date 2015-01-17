Exec { path => [ "/bin/", "/sbin/" , "/usr/bin/", "/usr/sbin/" ] }

if $operatingsystem == 'Ubuntu' {
  notice('Cool! I like you')
}
elsif $operatingsystem == 'Windows' {
  warning('What the hell are you doing...')
}
else {
  notice("I dont know what to think about ${operatingsystem}. Its a ${osfamily}, isnt it?")
}

class { 'nodejs':
  version => 'stable',
}

package { 'express':
  provider => 'npm',
  require  => Class['nodejs']
}

include system-update
include nodejs
include stdlib
include wget
