(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{280:function(r,e,t){"use strict";t.r(e);var n=t(28),s=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h3",{attrs:{id:"learndocker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learndocker"}},[r._v("#")]),r._v(" learndocker")]),r._v(" "),t("h4",{attrs:{id:"首先通过xshell连接云主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首先通过xshell连接云主机"}},[r._v("#")]),r._v(" 首先通过xshell连接云主机")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("yum update   升级所有的包，更新系统")])]),r._v(" "),t("li",[t("p",[r._v("yum install git   安装Git")])]),r._v(" "),t("li",[t("p",[r._v("mkdir /usr/projects    新建用户项目目录")])]),r._v(" "),t("li",[t("p",[r._v('ssh-keygen -t rsa -b 4096 -C "1902305073@qq.com"'),t("br"),r._v("\n生成github ssh公钥 -t rsa使用rsa算法 -b 4096大小字节为4096")])]),r._v(" "),t("li",[t("p",[r._v("cat /root/.ssh/id_rsa.pub"),t("br"),r._v("\n查找生成的秘钥并拷贝出来并关联到github上")])]),r._v(" "),t("li",[t("p",[r._v("clone github上面的项目到projects中")])]),r._v(" "),t("li",[t("p",[r._v("安装nvm\nwget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash")])]),r._v(" "),t("li",[t("p",[r._v("将nvm配置到环境变量中,执行以下脚本\n. /root/.bashrc")])]),r._v(" "),t("li",[t("p",[r._v("安装最新的稳定版本的node\nnvm install stable")])]),r._v(" "),t("li",[t("p",[r._v("安装nrm用来切换npm源\nnpm install nrm -g")])]),r._v(" "),t("li",[t("p",[r._v("将npm切换为taobao源\nnrm use taobao")])])]),r._v(" "),t("h4",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[r._v("#")]),r._v(" 安装docker")]),r._v(" "),t("ul",[t("li",[r._v("yum install -y yum-utils "),t("br"),r._v("\ndevice-mapper-persistent-data "),t("br"),r._v("\nlvm2\n首先安装依赖包")]),r._v(" "),t("li",[r._v("yum-config-manager "),t("br"),r._v("\n--add-repo "),t("br"),r._v("\nhttps://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n添加阿里云镜像")]),r._v(" "),t("li",[r._v("yum install docker-ce docker-ce-cli containerd.io\t\n安装docker-ce 社区版docker（免费）")])]),r._v(" "),t("h4",{attrs:{id:"在docker中安装系统需要阿里云镜像加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在docker中安装系统需要阿里云镜像加速"}},[r._v("#")]),r._v(" 在docker中安装系统需要阿里云镜像加速")]),r._v(" "),t("ul",[t("li",[r._v("首先新建docker文件 mkdir -p /etc/docker")]),r._v(" "),t("li",[r._v("配置镜像加速器 阿里云网址（"),t("a",{attrs:{href:"https://cr.console.aliyun.com/cn-beijing/instances/mirrors",target:"_blank",rel:"noopener noreferrer"}},[t("OutboundLink")],1),r._v("）")]),r._v(" "),t("li",[r._v('tee /etc/docker/daemon.json <<-\'EOF\'\n{\n"registry-mirrors": ["https://40lrm95m.mirror.aliyuncs.com"]\n}\nEOF')]),r._v(" "),t("li",[r._v("systemctl restart docker 重载docker")]),r._v(" "),t("li",[r._v("systemctl restart docker 重启docker")]),r._v(" "),t("li",[r._v("npm i pm2 -g  安装pm2")])])])}),[],!1,null,null,null);e.default=s.exports}}]);