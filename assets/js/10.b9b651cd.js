(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(r,e,a){"use strict";a.r(e);var t=a(45),n=Object(t.a)({},(function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-create-a-public-mirror-for-almalinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-public-mirror-for-almalinux"}},[r._v("#")]),r._v(" How to create a public mirror for AlmaLinux")]),r._v(" "),a("p",[r._v("Mirrors are extremely important to provide a fast and reliable\ninfrastructure, and we are very grateful to people and organizations that\nhelp us with this. The current list of public mirrors can be found on the\n"),a("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("mirrors.almalinux.org"),a("OutboundLink")],1),r._v(" website.")]),r._v(" "),a("p",[r._v("You can create a public AlmaLinux mirror in 4 easy steps:")]),r._v(" "),a("ol",[a("li",[a("p",[r._v("Make sure that you have enough free space: 150Gb is the absolute minimum\nbut we recommend reserving at least 250Gb.")])]),r._v(" "),a("li",[a("p",[r._v("Synchronize with the official AlmaLinux mirror via rsync:")]),r._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[r._v("/usr/bin/rsync -avSH -f "),a("span",{pre:!0,attrs:{class:"token string"}},[r._v("'R .~tmp~'")]),r._v(" --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\n")])])])]),r._v(" "),a("li",[a("p",[r._v("Create a cron task to sync it periodically (we recommend updating the\nmirror every 3 hours):")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("0 */3 * * * /usr/bin/flock -n /var/run/almalinux_rsync.lock -c \"/usr/bin/rsync -avSH -f 'R .~tmp~' --delete-delay --delay-updates rsync://rsync.repo.almalinux.org/almalinux/ /almalinux/dir/on/your/server/\"\n")])])])]),r._v(" "),a("li",[a("p",[r._v("Fork the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/",target:"_blank",rel:"noopener noreferrer"}},[r._v("github.com/AlmaLinux/mirrors"),a("OutboundLink")],1),r._v("\nrepository and create a pull request that will add a YAML file describing\nyour mirror to the "),a("code",[r._v("mirrors.d")]),r._v(" directory.\nYou can use the "),a("a",{attrs:{href:"https://github.com/AlmaLinux/mirrors/blob/master/mirrors.d/repo.almalinux.org.yml",target:"_blank",rel:"noopener noreferrer"}},[r._v("official AlmaLinux repo file"),a("OutboundLink")],1),r._v("\nas an example. Your mirror does not have to provide all the protocols\nthat our main mirror provides, but either HTTP or HTTPS is required.")]),r._v(" "),a("p",[r._v("More information about creating a pull request can be found in the\n"),a("a",{attrs:{href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[r._v("GitHub documentation"),a("OutboundLink")],1),r._v(".\nAfter reviewing the pull request your mirror will be published at the\n"),a("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("mirrors.almalinux.org"),a("OutboundLink")],1),r._v(" page and will\nbe added to the mirrorlists that dnf package manager works with.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);