<template>
  <div class="box">
    <div class="header">
      <span class="iconfont back_btn"
            @click="back_click" >&#xe650;</span>
        {{this.$route.params.type=='0'?'用户协议':'隐私协议'}}
    </div>
    <div v-if="this.$route.params.type=='0'" class="content">
      <h1>梦境旅⼈软件⽤户使⽤协议</h1>
      <h3>上次版本更新时间：2020年5⽉10⽇</h3>
      <h3>本次版本更新时间：2020年5⽉14⽇</h3>
      <p>本协议是⽤户（下称“⽤户”或“您”）与梦境旅⼈之间的协议，梦境旅⼈将按照本协议约定之内容为您提
      供服务。“梦境旅⼈”是指梦境旅⼈和/或其相关服务可能存在的运营关联单位。<strong>若您不同意本协议中所述
      任何条款或其后对协议条款的修改，请您不要使⽤梦境旅⼈提供的相关服务。您的使⽤⾏为将视作对本
      协议全部条款的完全接受。请您仔细阅读本协议的全部条款与条件，尤其是协议中⿊⾊加粗的条款。</strong>
      <br>
      如您为未成年⼈的，请在法定监护⼈的陪同下阅读和判断是否同意本协议，特别注意未成年⼈条款。未
      成年⼈⾏使和履⾏本协议项下的权利和义务视为已获得监护⼈的认可。</p>
      <h2>1.服务说明</h2>
      <p>
        1.1 梦境旅⼈向您提供包括但不限于如下服务：<br/>
        1.1.1 梦境旅⼈⽹站 dreamer.llwxi.cn（及其他由梦境旅⼈运营的任何⽹站）；<br/>
        1.1.2 梦境旅⼈直接拥有或运营的包括但不限于PC、平板、⼿机、电视等全部终端客户端产品；<br/>
        1.1.3 梦境旅⼈⽤户个⼈中⼼、星⾠、解梦券；<br/>
        1.1.4 梦境旅⼈直接拥有或运营的服务器、⽹络存储空间；<br/>
        1.1.5 梦境旅⼈提供给您的各类增值服务；<br/>
        1.1.6 梦境旅⼈提供给您的其他技术和/或服务。<br/>
        1.2 梦境旅⼈所提供的服务，均限于在梦境旅⼈平台内使⽤，任何以恶意破解等⾮法⼿段将梦境旅⼈所
        提供的服务与梦境旅⼈平台分离的⾏为，皆不属于本协议约定的由梦境旅⼈提供的服务。由此引起的⼀
        切后果由⾏为⼈负责，梦境旅⼈将保留依法追究⾏为⼈法律责任的权利。<br/>
        1.3 梦境旅⼈官⽅所公布的⽅式为注册、登录、下载客户端（包括但不限于iOS、Android等智能平
        台）、使⽤梦境旅⼈服务的唯⼀合法⽅式，⽤户通过其他任何途径、任何渠道、任何⽅式获取的梦境旅
        ⼈服务（包括但不限于账号、星⾠、客户端下载等）均为⾮法所得，梦境旅⼈概不承认其效⼒，且⼀经
        发现，梦境旅⼈有权⽴即作出删除、清零、封号等处理，任何因此导致的⼀切不利后果均由⽤户⾃⾏承
        担。请⽤户妥善保管⾃⼰的账号和密码，加强密码安全性，谨防账号泄露或被盗。因⽤户账号被泄露或
        被盗⽽造成的任何损失，梦境旅⼈不承担补偿责任。<br/>
        1.4 ⽤户理解并认可梦境旅⼈享有如下权利，梦境旅⼈⾏使如下权利不视为违约，⽤户不追究或者豁免
        梦境旅⼈的相关法律责任：⽤户有权⻓期使⽤其合法获得的梦境旅⼈账号及其账号下星⾠、解梦券等，
        但是⽤户确认其仅享有上述服务和产品的使⽤权，上述服务和产品，及其衍⽣物的所有权及知识产权均
        归梦境旅⼈所有（⽤户经合法渠道取得的实体产品所有权除外）。梦境旅⼈有权在法律允许的最⼤范围
        内根据实际情况⾃⾏决定收回⽇期，⽆需另⾏通知⽤户亦⽆需征得⽤户同意。<br/>
        1.5 梦境旅⼈有权提前向⽤户公告（包括但不限于弹出公告、⽹站⾸⻚公告、系统消息）以修改、替
        换、升级与梦境旅⼈服务相关的任何软件。如果⽤户不同意或者不接受梦境旅⼈相关软件的修改、替
        代、升级，请直接拒绝、停⽌、取消使⽤⾏为，否则视为⽤户同意并接受梦境旅⼈相关软件的修改、替
        代、升级，同时该同意并接受的⾏为仍受本协议约束。<br/>
        1.6 本协议所称“⽤户”，包括注册⽤户及未注册⽤户。凡未注册梦境旅⼈的产品和/或服务的⽤户，⾃下
        载或安装梦境旅⼈的产品和/或使⽤梦境旅⼈的服务时即⾃动成为梦境旅⼈的“⾮注册⽤户”。<br/>
        1.7 特别提醒：由于梦境旅⼈的产品和服务较多，为您提供的产品和服务内容也有所不同，本协议为梦
        境旅⼈统⼀适⽤的⼀般性⽤户服务条款。针对梦境旅⼈的某些特定产品/服务，梦境旅⼈还将指定特定
        ⽤户服务协议，以便更具体地向你阐明梦境旅⼈的服务内容、服务规则等内容，您应在充分阅读并同意
        特定⽤户服务协议的全部内容后再使⽤该特定产品/服务。
      </p>
      <h2>2. ⽤户注册</h2>
      <p>如果您使⽤梦境旅⼈提供的⽹络存储空间进⾏视听节⽬、⽂字、美术摄影等的上传及传播服务，您需要
      注册⼀个账号并设置密码，并确保注册信息的真实性、正确性及完整性，如果上述注册信息发⽣变化，
      您应及时更改。在完成本服务的登记程序后，您应维护账号及密码的机密安全。您应对任何⼈利⽤您的
      账号及密码所进⾏的活动完全负责，梦境旅⼈⽆法对⾮法或未经您授权使⽤您账号及密码的⾏为作出甄
      别，因此梦境旅⼈将不承担任何责任。同时您同意并承诺做到：</p>
      <p>2.1 当您的账号或密码遭到未经授权的使⽤，或者发⽣任何安全问题时，您会⽴即有效地通知到梦境旅
      ⼈；<br/>
      2.2 当您每次登录梦境旅⼈或使⽤相关服务后，会将有关账号等安全退出；<br/>
      2.3 您同意接受梦境旅⼈通过电⼦邮件、客户端、⽹⻚或其他合法⽅式向您发送通知信息和其他相关信
      息；<br/>
      2.4 您承诺不在注册、使⽤梦境旅⼈账号从事以下⾏为：<br/>
      2.4.1 故意冒⽤他⼈信息为⾃⼰注册梦境旅⼈账号；<br/>
      2.4.2 未经他⼈合法授权以他⼈名义注册梦境旅⼈账号；<br/>
      2.4.3 窃取、盗⽤他⼈的梦境旅⼈账号、星⾠、会员标识等；<br/>
      2.4.4 使⽤侮辱、诽谤、⾊情、政治等违反法律、道德及公序良俗的词语注册梦境旅⼈账号；<br/>
      2.4.5 以⾮法占有梦境旅⼈相关服务资源为⽬的，通过正当或⾮正当⼿段恶意利⽤⽹站漏洞；<br/>
      2.4.6 侵犯他⼈合法权益的其他内容。<br/>
      2.5 您在此同意，梦境旅⼈有权对违反上述条款的⽤户作出禁⽌注册及/或封号的处理。<br/>
      2.6 您了解并知悉，您可以您的梦境旅⼈账号登录梦境旅⼈及其关联⽅提供的梦境旅⼈体系下全部产
      品。</p>
      <h2>3. 梦境旅⼈上的内容</h2>
      <p>
      3.1 梦境旅⼈上的内容是指您在梦境旅⼈上传、传播的视频、⾳频或其他任何形式的内容，包括但不限
      于图像、⽂字、链接等。<br/>
      3.2 您在梦境旅⼈上传或发布的作品，您保证对其享有合法的著作权或相应授权，梦境旅⼈有权展示、
      散布及推⼴前述内容。<br/>
      3.3 为提⾼您内容曝光量及发布效率，您同意您在梦境旅⼈的账号所发布的全部内容均授权梦境旅⼈以
      您的账号⾃动同步发布⾄梦境旅⼈及/或关联公司运营的全部产品，包括客户端软件及⽹站。您在梦境
      旅⼈发布、修改、删除内容的操作，均会同步到上述产品。<br/>
      3.4 任何经由梦境旅⼈提供的服务，以上传、张贴、发送电⼦邮件或任何其他⽅式传送的资讯、资料、
      ⽂字、软件、⾳乐、⾳讯、照⽚、图形、视讯、信息或其他资料（以下简称“内容”），⽆论系公开还是
      私下传送，均由内容提供者、上传者承担责任。<br/>
      3.5 梦境旅⼈⽆法预先知晓并合理控制经由梦境旅⼈服务上传之内容，因此，您已预知在使⽤梦境旅⼈
      的服务时，可能会接触到部分令您感到不快、不适或厌恶的内容，您同意放弃由此产⽣的针对梦境旅⼈
      的任何追索权。但梦境旅⼈有权依法停⽌传输任何前述内容并采取相应处理，包括但不限于暂停您继续
      使⽤梦境旅⼈的部分或全部服务，保存有关记录并向有关机关报告。<br/>
      3.6 您需独⽴对⾃⼰在梦境旅⼈上实施的⾏为承担法律责任。若您使⽤梦境旅⼈服务的⾏为不符合本协
      议，梦境旅⼈有权作出独⽴处理，且在⽆需事先通知及/或征得⽤户同意的情况下停⽤您的账号。您若
      在梦境旅⼈上散布和传播反动、⾊情或其他违反国家法律、规定的信息，梦境旅⼈的系统记录可能作为
      您违反相关法律的证据。
      </p>
      <h2>4. 使⽤规则</h2>
      <p>
      4.1 ⽤户在使⽤梦境旅⼈服务的过程中，应遵守以下法律法规：<br/>
      4.1.1 《中华⼈⺠共和国保守国家秘密法》<br/>
      4.1.2 《中华⼈⺠共和国著作权法》<br/>
      4.1.3 《中华⼈⺠共和国计算机信息系统安全保护条例》<br/>
      4.1.4 《计算机软件保护条例》<br/>
      4.1.5 《互联⽹电⼦公告服务管理规定》<br/>
      4.1.6 《信息⽹络传播权保护条例》<br/>
      4.1.7 《中华⼈⺠共和国⽹络安全法》<br/>
      4.1.8 其他有关计算机及互联⽹规定的法律、法规。<br/>
      4.2 在任何情况下，梦境旅⼈⼀旦合理地认为⽤户的⾏为可能违反上述法律、法规，可以在任何时候，
      不经事先通知终⽌向该⽤户提供服务。<br/>
      4.3 禁⽌⽤户从事以下⾏为：<br/>
      4.3.1 制作、上传、复制、传送、传播包含任何反对宪法所确定的基本原则、危害国家安全、泄露国家<br/>
      秘密、颠覆国家政权、破坏国家统⼀、破坏⺠族团结、损害国家荣誉和利益、煽动⺠族仇恨、⺠族歧
      视、破坏⺠族团结、破坏国家宗教政策、宣扬邪教和封建迷信、淫秽、⾊情、赌博、暴⼒、凶杀、恐怖
      或者教唆犯罪、侮辱或者诽谤他⼈，侵害他⼈合法权益的等法律、⾏政法规禁⽌的内容或其他令⼈反感
      的包括但不限于资讯、资料、⽂字、软件、⾳乐、照⽚、图形、信息或其他资料；
      4.3.2 以任何⽅式危害未成年⼈；<br/>
      4.3.3 冒充任何⼈或机构，或以虚伪不实的⽅式谎称或使⼈误认为与任何⼈或任何机构有关；<br/>
      4.3.4 伪造标题或以其他⽅式操控识别资料，使⼈误认为该内容为梦境旅⼈所传送；<br/>
      4.3.5 将⽆权传送的内容（例如内部资料、机密资料）进⾏上载、张贴、发送电⼦邮件或以其他⽅式传
      送；<br/>
      4.3.6 将侵犯任何⼈的专利、商标、著作权、商业秘密等知识产权的内容加以上载、张贴、发送电⼦邮
      件或以其他⽅式传送；<br/>
      4.3.7 将⼴告函件、促销资料、"垃圾邮件"等，加以上载、张贴、发送电⼦邮件或以其他⽅式传送；<br/>
      4.3.8 跟踪或以其他⽅式骚扰他⼈；<br/>
      4.3.9 将有关⼲扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、
      档案和程序之资料，加以上载、张贴、发送电⼦邮件或以其他⽅式传送；<br/>
      4.3.10 ⼲扰或破坏梦境旅⼈服务或与梦境旅⼈服务相连的服务器和⽹络，或不遵守本协议之规定；<br/>
      4.3.11 故意或⾮故意违反任何相关的中国法律、法规、规章、条例等其他具有法律效⼒的规范；<br/>
      4.3.12 未经梦境旅⼈事先明确书⾯许可，以任何⽅式（包括但不限于机器⼈软件、蜘蛛软件、爬⾍软件
      等任何⾃动程序、脚本、软件）和任何理由⾃⾏或委托他⼈、协助他⼈获取平台的服务、内容、数据；<br/>
      4.3.13 ⽤户需保证其上传内容不得违反⼴电总局的相关规定，包括但不限于《互联⽹视听节⽬服务管理
      规定》（⼴电总局56号令）等，其上传节⽬应当符合法律、⾏政法规、部⻔规章的规定，上传内容不得
      含有以下内容：<br/>
      （1） 反对宪法确定的基本原则的；<br/>
      （2） 危害国家统⼀、主权和领⼟完整的；<br/>
      （3） 泄露国家秘密、危害国家安全或者损害国家荣誉和利益的；<br/>
      （4） 煽动⺠族仇恨、⺠族歧视，破坏⺠族团结，或者侵害⺠族⻛俗、习惯的；<br/>
      （5） 扰乱社会秩序，破坏社会稳定的；<br/>
      （6） 诱导未成年⼈违法犯罪和渲染暴⼒、⾊情、赌博、恐怖活动的；<br/>
      （7） 侮辱或者诽谤他⼈，侵害公⺠个⼈隐私等他⼈合法权益的；<br/>
      （8） 危害社会公德，损害⺠族优秀⽂化传统的；<br/>
      （9） 有关法律、⾏政法规和国家规定禁⽌的其他内容。<br/>
      4.3.14 您制作、发布、传播的内容需遵守《⽹络⾳视频信息服务管理规定》及相关法律法规规定，不得
      利⽤基于深度学习、虚拟现实等的新技术新应⽤制作、发布、传播虚假新闻信息等法律法规禁⽌的信息
      内容。您在发布或传播利⽤基于深度学习、虚拟现实等的新技术新应⽤制作的⾮真实⾳视频信息时，应
      当以显著⽅式予以标识，否则梦境旅⼈有权对相关内容和账户采取包括但不限于增加标识、限制、封禁
      等措施。<br/>
      4.3.15 如⽤户提供的上传内容含有以上违反政策法律法规的信息或者内容的，由⽤户直接承担以上导致
      的⼀切不利后果，如因此给梦境旅⼈造成不利后果的，⽤户应负责消除影响，并且赔偿因此导致的⼀切
      损失。<br/>
      4.4 ⽤户不得通过任何渠道或媒体（包括但不限于⾃媒体等）发出“与梦境旅⼈合作”、“与梦境旅⼈共同
      出品”等任何携带“梦境旅⼈”品牌的字样，如⽤户需宣传推⼴合作节⽬，⽤户只能在宣传中提及节⽬本身
      ⽽不得提及与梦境旅⼈关系或者擅⾃以梦境旅⼈品牌进⾏推⼴，凡是⽤户的发稿带有“梦境旅⼈”的⼀切
      宣传稿件必须通过梦境旅⼈相应合作部⻔之书⾯同意，否则因此给梦境旅⼈造成的⼀切损失⽤户应予以
      赔偿。<br/>
      4.5 星⾠使⽤规则<br/>
      4.5.1 若⽆特殊说明，⽤户通过使⽤星⾠服务获得的星⾠、兑换物品等虚拟产品，具体使⽤⽅法、期限
      等以梦境旅⼈⻚⾯中附带的说明及⽤户指南或具备以上解说性质的类似官⽅⽂档为准。<br/>
      4.5.2 星⾠系统会因⽤户需求、⽹站策略调整、⽤户接受程度等因素随时进⾏调整，具体信息请以当时
      的⻚⾯说明为准。<br/>
      4.5.3 星⾠系统是梦境旅⼈向⽤户提供的免费服务，星⾠的使⽤、消耗、兑换、抽奖等⾏为均不提供发
      票或其他票据证明。<br/>
      4.5.4 基于虚拟商品的性质和特征，梦境旅⼈不提供星⾠兑换的虚拟商品的退货、换货服务。对于实物
      产品，因⽤户原因导致产品出现瑕疵、损坏的，梦境旅⼈不予负责。<br/>
      4.5.5 除⾮得到梦境旅⼈的书⾯授权，⽤户不得将星⾠服务及星⾠⽤于商业领域，包括但不限于买卖、
      置换、抵押或以特定⽅式使⽤星⾠服务获取不当得利等。任何⽤户都应通过正规渠道获得星⾠服务，⼀
      切通过⾮官⽅公布渠道取得的星⾠及其衍⽣服务均不对梦境旅⼈发⽣法律效⼒，梦境旅⼈有权单⽅⾯收
      回相关星⾠并终⽌相应服务，严重者梦境旅⼈有权对其⽤户采取封号处理。<br/>
      4.5.6 如⽆特殊约定，⽤户通过正规渠道获得的星⾠及其衍⽣物品均不以任何现⾦⽅式退还，仅能通过
      享⽤星⾠服务进⾏等值消耗。⽤户消耗其所获得全部星⾠，且不将继续使⽤星⾠服务的，服务终⽌。 
      </p>
      <h2>5. 第三⽅链接</h2>
      <p>
      梦境旅⼈服务可能会提供与其他国际互联⽹⽹站或资源进⾏链接。除⾮另有声明，梦境旅⼈⽆法对第三
      ⽅⽹站之服务进⾏控制，⽤户因使⽤或依赖上述⽹站或资源所产⽣的损失或损害，梦境旅⼈不承担任何
      责任。我们建议您在离开梦境旅⼈，访问其他⽹站或资源前仔细阅读其服务条款和隐私政策。</p>
      <h2>6. 知识产权</h2>
      <p>
      6.1 受国际版权公约、中华⼈⺠共和国著作权法、专利法、及其他知识产权⽅⾯的法律法规的保护，梦
      境旅⼈服务及本服务所使⽤的软件、技术、商标、材料等的所有知识产权归梦境旅⼈所有和享有。“知识
      产权”包括在专利法、版权法、商标法、反不正当竞争法中等法律规定的任何和所有权利、任何和所有其
      它所有权以及其中的任何和所有应⽤、更新、扩展和恢复。<br/>
      6.2 ⽤户不得修改、改编、翻译梦境旅⼈服务所使⽤的软件、技术、材料等，或者创作与之相关的派⽣
      作品，不得通过反向⼯程、反编译、反汇编或其他类似⾏为获得其的源代码，否则由此引起的⼀切法律
      后果由⽤户负责，梦境旅⼈将依法追究违约⽅的法律责任。<br/>
      6.3 ⽤户不得恶意修改、复制、传播梦境旅⼈服务所使⽤的软件、技术、材料等。否则，⽤户⾃⾏承担
      因此⽽造成对其他⼈的损害，或者造成对梦境旅⼈公司形象损害，要承担相应的法律责任。<br/>
      6.4 ⽤户不得擅⾃删除、掩盖或更改梦境旅⼈的版权声明、商标或其它权利声明。梦境旅⼈平台所有设
      计图样以及其他图样、产品及服务名称，均为梦境旅⼈及/或其关联公司所享有的商标、标识。任何⼈不
      得使⽤、复制或⽤作其他⽤途。<br/>
      6.5 梦境旅⼈对其⾃制内容和其他通过授权取得的独占内容享有完全知识产权，未经梦境旅⼈许可，任
      何单位和个⼈不得私⾃转载、传播和提供观看服务或者有其他侵犯梦境旅⼈知识产权的⾏为。否则，梦
      境旅⼈将追究侵权⾏为⼈的法律责任。<br/>
      6.6 梦境旅⼈所有和享有的知识产权，不因⽤户的任何使⽤⾏为⽽发⽣权利转移。
      </p>
      <h2>7. 免责声明</h2>
      <p>
      7.1 梦境旅⼈对于任何包含、经由或连接、下载或从任何与有关本⽹络服务所获得的任何内容、信息或
      ⼴告，不声明或保证其正确性或可靠性；并且对于⽤户经本服务上的⼴告、展示⽽购买、取得的任何产
      品、信息或资料，梦境旅⼈不负保证责任。⽤户⾃⾏负担使⽤本服务的⻛险。<br/>
      7.2 除⾮另有明确的书⾯说明，梦境旅⼈提供给您的全部产品和服务，均是在“按现状”和“按现有”的基
      础上提供的。<br/>
      7.3 梦境旅⼈对如下事项不做担保（包括但不限于）：<br/>
      7.3.1 梦境旅⼈提供的⽹站、客户端等软件虽然均已经过梦境旅⼈测试，但由于技术本身的局限性，梦
      境旅⼈不能保证其与其他软硬件、系统完全兼容。如果出现不兼容的情况，⽤户可将情况报告梦境旅
      ⼈，以获得技术⽀持。如果⽆法解决问题，⽤户可以选择卸载、停⽌使⽤梦境旅⼈服务。<br/>
      7.3.2 使⽤梦境旅⼈服务涉及到Internet服务，可能会受到各个环节不稳定因素的影响。因不可抗⼒、
      ⿊客攻击、系统不稳定、⽹络中断、⽤户关机、通信线路等原因，均可能造成梦境旅⼈服务中断或不能
      满⾜⽤户要求的情况。梦境旅⼈不保证梦境旅⼈服务适合⽤户的使⽤要求。<br/>
      7.3.3 由于梦境旅⼈提供的客户端等软件可以通过⽹络途径下载、传播，因此对于从⾮梦境旅⼈指定官
      ⽅站点下载、⾮梦境旅⼈指定途径获得的梦境旅⼈服务相关软件，梦境旅⼈⽆法保证其是否感染计算机
      病毒、是否隐藏有伪装的⽊⻢程序等⿊客软件，也不承担⽤户由此遭受的⼀切直接或间接损害赔偿等法
      律责任。<br/>
      7.3.4 梦境旅⼈不做任何与梦境旅⼈服务、产品的安全性、可靠性、及时性和性能有关的担保。<br/>
      7.3.5 梦境旅⼈不保证其提供的任何产品、服务或其他材料符合⽤户的期望。<br/>
      7.4 ⽤户使⽤经由梦境旅⼈服务下载或取得的任何资料，其⻛险由⽤户⾃⾏负担，因该使⽤⽽导致⽤户
      电脑系统损坏或资料流失，⽤户应负完全责任。<br/>
      7.5 基于以下原因⽽造成的利润、商业信誉、资料损失或其他有形或⽆形损失，梦境旅⼈不承担任何直
      接、间接、附带、衍⽣或惩罚性的赔偿：<br/>
      7.5.1 梦境旅⼈服务全部或部分⽆法使⽤；<br/>
      7.5.2 经由梦境旅⼈服务购买或取得的任何产品、资料或服务；<br/>
      7.5.3 ⽤户资料遭到未授权的使⽤或修改；<br/>
      7.5.4 其他与梦境旅⼈服务相关的事宜。<br/>
      7.6 ⽤户应妥善保管⾃⼰的账号和密码，加强密码安全性，谨防账号泄露或被盗。因⽤户账号被泄露或
      被盗⽽造成的任何损失，梦境旅⼈不承担补偿责任。⽤户因电信和⽹通部⻔的通讯线路故障、⽹络或电
      脑故障、系统不稳定、不可抗⼒（如服务器宕机）等⾮梦境旅⼈原因造成账号、账号内财产等丢失、减
      少的，梦境旅⼈不承担补偿等责任。<br/>
      7.7 ⽤户理解并同意⾃主选择免费下载和使⽤梦境旅⼈服务，⻛险⾃负，包括但不限于⽤户使⽤梦境旅
      ⼈服务过程中的⾏为，以及因使⽤梦境旅⼈服务产⽣的⼀切后果。如因下载或使⽤梦境旅⼈服务⽽对计
      算机系统造成的损坏或数据的丢失等，⽤户须⾃⾏承担全部责任。<br/>
      7.8 ⽤户因认证信息不真实⽽导致账号、账号内财产等丢失、减少⽽⽆法找回的，梦境旅⼈不承担任何
      法律责任。
      </p>
      <h2>8. 服务的变更、中断、终⽌</h2>
      <p>
      8.1 您理解并同意，梦境旅⼈基于经营策略的调整，可能会对服务内容进⾏变更，也可能会中断、中⽌
      或终⽌服务。<br/>
      8.2 您理解并同意，如梦境旅⼈发⽣合并、分⽴、收购、资产转让时，梦境旅⼈可向第三⽅转让本服务
      下相关资产；梦境旅⼈亦可在单⽅通知您后，将本协议下部分或全部服务及相应的权利义务转交由第三
      ⽅运营或履⾏。<br/>
      8.3 您理解并同意，如您违反相关法律法规的规定、违反本协议及其他梦境旅⼈平台约定，梦境旅⼈有
      权不经通知⽽单⽅中断或终⽌向您提供服务。<br/>
      8.4 梦境旅⼈终⽌向您提供服务后，有权根据适⽤法律的要求删除您的个⼈信息，或使其匿名化处理，
      亦有权依照法律规定的期限和⽅式继续保存您留存于我⽅平台的其他内容和信息。
      </p>
      <h2>9. 注销</h2>
      <p>
      9.1 ⽤户有权向梦境旅⼈提出账号注销申请，您可以通过联系梦境旅⼈客服注销您的账号（但相关法律
      法规另有规定的或本协议及各站内规则另有约定的除外）。<br/>
      9.2 特别提醒：注销梦境旅⼈账号后，您将⽆法再以此账号登录和使⽤梦境旅⼈及其关联公司的所有产
      品与服务以及产品及服务中与第三⽅合作的服务内容，梦境旅⼈也将同时终⽌在该账号下为您提供我们
      各项产品与服务，这同时也不可避免地会给您的售后维权带来不便。且梦境旅⼈账号⼀旦注销完成，将
      ⽆法恢复。请您在注销前慎重考虑。<br/>
      9.3 如您确定需要注销梦境旅⼈账号的，您已充分知晓并确认，账号注销后该UID仍然存在，但您将不
      再拥有账号相关的权益，包括但不限于：<br/>
      9.3.1 账号注销后，您将⽆法再以该账号登录、使⽤梦境旅⼈旗下的全部产品和服务；<br/>
      9.3.2 账号注销后，您曾通过该账号登录、使⽤梦境旅⼈旗下的全部产品和服务的所有内容、信息、数
      据、记录将会被删除或匿名化处理，您也⽆法再搜索、访问、获取、使⽤和找回，包括但不限于：账号
      信息（头像、昵称、签名等）、绑定信息；<br/>
      9.3.3 账号注销后，该账号的交易记录将被清空且⽆法恢复；<br/>
      9.3.4 账号注销后，梦境旅⼈有权不再为⽤户提供任何与账号有关的服务；<br/>
      9.3.5 您同意通过账号注销的⽅式放弃该账号在梦境旅⼈旗下的产品与服务使⽤期间已产⽣但未消耗完
      毕的权益及未来的预期利益。梦境旅⼈将对该账号下的全部权益做清除处理。<br/>
      9.4 在您向我们申请注销梦境旅⼈账号之前，为了保护您的账号安全和财产权益，您需先⾏检查与确保
      您申请注销的账号已经同时满⾜以下条件，包括但不限于：<br/>
      9.4.1 账号系⽤户通过官⽅渠道注册，符合本协议及相关规定的账号；且为您本⼈的会员账号；<br/>
      9.4.2 按照客服要求的注销流程进⾏注销操作；<br/>
      9.4.3 账号处于安全状态，包括：未处于申请找密码、修改⼿机号的状态中；⽆未处理完毕的（被）投
      诉、举报；其他不安全/异常状态；<br/>
      9.4.4 账号内⽆未处理完毕的交易；<br/>
      9.4.5 其他应满⾜的条件。<br/>
      9.5 如您已充分阅读并理解9.2和9.3条的内容，并确认已经满⾜9.4条的全部条件，可以向客服提出账号
      注销申请。客服将对您的账号安全状态以及您的相关产品与服务的使⽤情况等进⾏审核，综合判断您的
      账号是否符合条件。<br/>
      9.6 梦境旅⼈账号⼀旦注销，您与我们曾签署过的相关⽤户协议、其他权利义务性⽂件等相应终⽌（但
      已约定继续⽣效的或法律另有规定的除外）。同时，您知悉并同意：即使您的账号被注销了，也并不减
      轻或免除您在协议期间内应根据相关法律法规、相关协议、规则等（可能）需要承担的相关责任。
      </p>
      <h2>10. 隐私政策</h2>
      <p>
      10.1 梦境旅⼈注重保护⽤户的个⼈信息及个⼈隐私。个⼈信息是指以电⼦或者其他⽅式记录的能够单独
      或者与其他信息结合识别特定⾃然⼈身份或者反映特定⾃然⼈活动情况的各种信息。您在下载、安装、
      启动、浏览、注册、登录、使⽤梦境旅⼈的产品与/或服务时，梦境旅⼈将按照平台公布的《梦境旅⼈隐
      私政策》的约定处理和保护您的个⼈信息，因此希望您能够仔细阅读、充分理解《梦境旅⼈隐私政策》
      的全⽂，并在需要时，按照《梦境旅⼈隐私政策》的指引，作出您认为适当的选择。<br/>
      10.2 您应当在仔细阅读、充分理解《梦境旅⼈隐私政策》后使⽤梦境旅⼈的产品与/或服务，如果您不
      同意政策的内容，将可能导致梦境旅⼈的产品与/或服务⽆法正常运⾏，或者⽆法达到梦境旅⼈拟达到
      的服务效果。您使⽤或继续使⽤梦境旅⼈提供的产品与/或服务的⾏为，都表示您充分理解和同意《梦
      境旅⼈隐私政策》（包括更新版本）的全部内容。<br/>
      10.3 如您对《梦境旅⼈隐私政策》或对您的个⼈信息相关内容有任何问题（包括问题咨询、投诉等），
      您可通过《梦境旅⼈隐私政策》第⼗条公布的联系⽅式联系我们。
      </p>
      <h2>11. 未成年⼈条款</h2>
      <p>
      11.1 梦境旅⼈⾮常注重未成年⼈的保护。若您为未成年⼈，应在监护⼈监护、指导下阅读本协议，并在
      取得监护⼈的同意后使⽤梦境旅⼈的产品与/或服务。<br/>
      11.2 监护⼈应指导⼦⼥上⽹应该注意的安全问题，防患于未然。梦境旅⼈不⿎励未成年⼈使⽤梦境旅⼈
      的产品/服务进⾏任何消费⾏为，如有消费，未成年⼈应请监护⼈操作或在监护⼈明示同意下操作。<br/>
      11.3 对于未成年⼈的隐私保护，梦境旅⼈将严格按照平台公布的《梦境旅⼈隐私政策》中阐述的⽅式、
      ⽅法执⾏。</p>
      <h2>12. 法律适⽤和管辖</h2>
      <p>
      12.1 本协议的⽣效、履⾏、解释及争议的解决均适⽤中华⼈⺠共和国法律。本条款因与中华⼈⺠共和国
      现⾏法律相抵触⽽导致部分⽆效，不影响其他部分的效⼒。双⽅同意，解决争议时，应以您同意的最新
      版《梦境旅⼈弹幕⽹⽤户使⽤协议》为准。<br/>
      12.2 如就本协议内容或其执⾏发⽣任何争议，应尽量友好协商解决；协商不成时，则争议各⽅均⼀致同
      意将争议提交⼴州仲裁委员会按照其仲裁规则进⾏仲裁。仲裁裁决为⼀裁终局，对各⽅均有法律约束
      ⼒。
      </p>
      <h2>13. 协议的修改与通知</h2>
      <p>
      13.1 梦境旅⼈有权依据国家政策、技术条件、产品功能等变化需要⽽对本协议进⾏修改并将修改后的协
      议予以发布。<br/>
      13.2 前述内容⼀经正式发布，梦境旅⼈将以适当的⽅式（包括但不限于弹窗、邮件、站内信、⽹站公告
      等）提醒您更新的内容，以便您及时了解本协议的最新版本。<br/>
      13.3 您知悉，本协议的名称、各章节标题仅为⽅便及阅读⽽设，且因本协议在我们平台展示之处较多，
      全部协议更名完毕可能需要⼀段时间，在此期间内，两个名称的同时存在并不影响正⽂其中任何条款的
      含义或解释。<br/>
      13.4 修改后的内容将构成本协议不可分割的组成部分，您应同样遵守。您对修改后的协议有异议的，请
      ⽴即停⽌登录、使⽤梦境旅⼈及相关服务，若您登录或继续使⽤梦境旅⼈及相关服务，则视为您已充分
      阅读、理解并接受更新后的本协议并愿意受更新后的本协议的约束。
      </p>
    </div>
    <div v-if="this.$route.params.type=='1'" class="content">
      <h1>梦境旅⼈隐私政策</h1>
      <h3>更新时间：2020年05⽉01⽇</h3>
      <h3>⽣效时间：2020年05⽉13⽇</h3>
      <p>
      版本更新提示：<br/>
      感谢您使⽤梦境旅⼈！本次梦境旅⼈（以下称“我们”）依据《中华⼈⺠共和国⽹络安全法》、《信息安
      全技术个⼈信息安全规范》（GB/T 35273-2017）以及其他相关法律法规和技术规范更新了⼀些内容，
      其中主要包括如下内容：向您提示了在我们的产品与/或服务的相关功能设置⻚⾯开启或取消相关权限
      的途径；向您提示了如何屏蔽我们为您推荐的个性化内容及个性化⼴告的开启或关闭路径等。<br/>
      为了更好的保护您的个⼈信息，建议您仔细阅读更新后的《梦境旅⼈隐私政策》，尤其是以⿊⾊加粗的
      条款。如您对本隐私政策条款有任何异议或疑问，您可通过本《梦境旅⼈隐私政策》第⼗条“联系我们”
      中公布的联系⽅式与我们沟通。
      </p>
      <h2>《梦境旅⼈隐私政策》⽬录</h2>
      <p>
      ⼀、 引⾔<br/>
      ⼆、 关于我们<br/>
      三、 名词解释<br/>
      四、 我们如何收集和使⽤您的个⼈信息<br/>
      五、 我们如何共享、转让、公开披露您的个⼈信息<br/>
      六、 关于使⽤Cookie和同类技术<br/>
      七、 我们对您个⼈信息的存储与保护<br/>
      ⼋、 您管理个⼈信息的权利<br/>
      九、 我们对未成年⼈的保护<br/>
      ⼗、 联系我们<br/>
      ⼗⼀、 本政策如何更新<br/>
      ⼗⼆、 争议解决
      </p>
      <h2>⼀、引⾔</h2>
      <p>
      1.本《梦境旅⼈隐私政策》（以下称“本隐私政策”）适⽤于梦境旅⼈的全部产品，包括梦境旅⼈⽹站、
      ios端应⽤程序、安卓端应⽤程序。<br/>
      2.请您在使⽤梦境旅⼈各项产品和/或服务前，仔细阅读并充分理解本隐私政策的全部内容。⼀旦您使⽤
      或继续使⽤梦境旅⼈的产品/服务，即表示您同意我们按照本隐私政策使⽤和处理您的相关信息。<br/>
      3.我们可能会不时依据法律法规或业务调整对本隐私政策进⾏修订。当本隐私政策发⽣变更后，我们会
      在版本更新后通过在显著位置提示或推送通知、消息等形式向您展示变更后的内容。<br/>
      4.您需理解，只有在您确认并同意变更后的《梦境旅⼈隐私政策》，我们才会依据变更后的隐私政策收
      集、使⽤、处理和存储您的个⼈信息；您有权拒绝同意变更后的隐私政策，但请您知悉，⼀旦您拒绝同
      意变更后的隐私政策，可能导致您不能或不能继续完整使⽤梦境旅⼈的相关服务和功能，或者⽆法达到
      我们拟达到的服务效果。
      </p>
      <h2>⼆、名词解释</h2>
      <p>
      除⾮另有约定，本隐私政策中使⽤到的名词，通常仅具有以下定义：<br/>
      1.个⼈信息（出⾃于GB/T 35273-2017《信息安全技术个⼈信息安全规范》）：是指以电⼦或者其他⽅
      式记录的能够单独或者与其他信息结合识别特定⾃然⼈身份或者反映特定⾃然⼈活动情况的各种信息。
      本隐私政策中涉及的个⼈信息包括⾃然⼈的基本资料（包括姓名、⽣⽇、性别、住址、电话号码、电⼦
      邮箱）、个⼈身份信息（包括身份证件号码）、个⼈⽣物识别信息（包括指纹、⾯部特征）、⽹络身份
      标识信息（包括系统账号、IP地址、邮箱地址以及与前述有关的密码、⼝令、⼝令保护答案）、个⼈财
      产信息（包括银⾏账号、⼝令、交易和消费记录、虚拟货币、虚拟交易、兑换码等虚拟财产信息）、通
      讯录信息、个⼈上⽹记录（包括⽹站浏览记录、软件使⽤记录）、个⼈常⽤设备信息（包括硬件序列
      号、硬件型号、设备MAC地址、操作系统类型、软件列表、唯⼀设备标识符）、个⼈位置信息（包括⼤
      概地理位置、精确定位信息）。我们实际具体收集的个⼈信息种类以下⽂描述为准。<br/>
      2.个⼈敏感信息（出⾃于GB/T 35273-2017《信息安全技术个⼈信息安全规范》）：是指⼀旦泄露、⾮
      法提供或滥⽤可能危害⼈身和财产安全，极易导致个⼈名誉、身⼼健康受到损害或歧视性待遇等的个⼈
      信息。本隐私政策中涉及的个⼈敏感信息包括您的个⼈财产信息、个⼈身份信息（包括身份证件号
      码）、个⼈⽣物识别信息、⽹络身份标识信息、通讯录信息、精准定位信息、收货地址。我们实际具体
      收集的个⼈敏感信息种类以下⽂描述为准。<br/>
      3.设备：是指可⽤于访问我们的产品和/或服务的装置，例如台式计算机、笔记本电脑、平板电脑或智能
      ⼿机。<br/>
      4.唯⼀设备标识符（专属 ID 或 UUID）：是指由设备制造商编⼊到设备中的⼀串字符，可⽤于以独有⽅
      式标识相应设备（例如⼿机的 IMEI 号）。唯⼀设备标识符有多种⽤途，其中可在不能使⽤ Cookie（例
      如在移动应⽤程序中）时⽤以提供⼴告。<br/>
      5.IP 地址：每台上⽹的设备都会指定⼀个编号，称为互联⽹协议 ( IP ) 地址。这些编号通常都是根据地
      理区域指定的。IP 地址通常可⽤于识别设备连接⾄互联⽹时所在的位置。<br/>
      6.SSL：SSL（Secure Socket Layer）⼜称为安全套接层，是在传输通信协议（TCP/IP）上实现的⼀种
      安全协议。SSL ⽀持各种类型的⽹络，同时提供三种基本的安全服务，均通过使⽤公开密钥和对称密钥
      技术以达到信息保密的效果。<br/>
      7.Cookie：Cookie是包含字符串的⼩⽂件，在您登⼊和使⽤⽹站或其他⽹络内容时发送、存放在您的
      计算机、移动设备或其他装置内（通常经过加密）。Cookie同类技术是可⽤于与Cookie类似⽤途的其他
      技术，例如：Web Beacon、Proxy、嵌⼊式脚本等。<br/>
      8.账号：当您注册账号并向我们提供⼀些个⼈信息，您就可以更好的使⽤我们的服务。当您访问梦境旅
      ⼈时，系统会利⽤这些账号信息对您进⾏身份验证，以防⽌未经授权的⼈员访问您的账号。<br/>
      9.去标识化/匿名化：是指通过对个⼈信息的技术处理，使其在不借助额外信息的情况下，⽆法识别个⼈
      信息主体，且处理后的信息不能被复原的过程。<br/>
      10.服务器⽇志：通常情况下，我们的服务器会⾃动记录您在访问⽹站时所发出的⽹⻚请求。这些“服务
      器⽇志”通常包括您的⽹络请求、互联⽹协议地址、浏览器类型、浏览器语⾔、请求的⽇期和时间及可以
      唯⼀识别您的浏览器的⼀个或多个 Cookie。
      </p>
      <h2>三、我们如何收集和使⽤您的个⼈信息</h2>
      <p>
      1.梦境旅⼈依据法律法规以及遵循正当、合法、必要的原则⽽收集和使⽤您在使⽤服务过程中主动提供
      或由于产品和/或服务需要⽽产⽣的个⼈信息。如果我们欲将您的个⼈信息⽤于本隐私政策未载明的其它
      ⽤途，或基于特定⽬的将收集⽽来的信息⽤于其他⽬的，我们会及时以合理的⽅式向您告知，并在使⽤
      前再次征得您的同意。<br/>
      2.我们收集和使⽤的您的个⼈信息类型包括两种：第⼀种：我们产品与/或服务的核⼼业务功能所必需的
      信息：此类信息为产品与/或服务正常运⾏的必备信息，您须授权我们收集。如您拒绝提供，您将⽆法
      正常使⽤我们的产品与/或服务；第⼆种：附加业务功能可能需要收集的信息：此信息为⾮核⼼业务功
      能所需的信息，您可以选择是否授权我们收集。如您拒绝提供，将导致附加业务功能⽆法实现或⽆法达
      到我们拟达到的效果，但不影响您对核⼼业务功能的正常使⽤。<br/>
      3.我们需要特别提醒您的是：由于我们的产品和服务较多，为您提供的内容也不同，因此核⼼业务功能
      （包括其收集的您的个⼈信息类型）也会因产品/服务的内容不同⽽有所区别，具体以产品/服务实际提
      供为准。除此之外，您理解并同意，我们希望提供给您的产品和服务是完善的，所以我们会不断改进我
      们的产品和服务，包括技术，这意味着我们可能会经常推出新的业务功能，可能需要收集新的个⼈信息
      或变更个⼈信息使⽤⽬的或⽅式。如果某⼀需要收集您的个⼈信息的功能或产品/服务未能在本隐私政
      策中予以说明的，我们会通过更新本政策、⻚⾯提示、弹窗、⽹站公告等⽅式另⾏向您说明该信息收集
      的⽬的、内容、使⽤⽅式和范围，并为您提供⾃主选择同意的⽅式，且在征得您明示同意后收集。在此
      过程中，如果您对相关事宜有任何疑惑的，可以通过本隐私政策第⼗条提供的⽅式联系我们，我们会尽
      快为您作出解答。<br/>
      4.通常情况下，我们会在以下场景中收集和使⽤您的个⼈信息：<br/>
      4.1账号注册<br/>
      （1)您注册并登录梦境旅⼈账号时，需要按照我们的指引完成⼀系列注册程序，在此过程中，您需要向
      我们提供以下信息：账号昵称、⼿机号码或电⼦邮箱（个⼈敏感信息，⽤于接受验证码匹配个⼈身
      份）。您只有提供真实准确的上述信息，才能成功注册梦境旅⼈账号并使⽤产品和/或服务的核⼼功
      能。如果您选择不提供上述为实现梦境旅⼈核⼼产品功能的必备信息，或将导致我们⽆法为您提供该核
      ⼼产品功能。<br/>
      （2)我们的产品⽀持您使⽤第三⽅平台的账号（微博账号/QQ账号）进⾏登录，如您使⽤第三⽅平台的
      账号登录的，我们将根据您的授权获取该第三⽅账号下的相关信息（包括：⽤户名、昵称、头像等）以
      及身份验证信息（个⼈敏感信息）。我们承诺，收集上述信息是⽤于为您提供账号登录服务以及保障您
      的账号安全，防范安全⻛险。如您拒绝授权此类信息，则您将⽆法使⽤第三⽅平台的账号登录我们平
      台，但不影响我们提供的其他产品和服务的正常使⽤。<br/>
      （3)同时，您需理解，⼿机号码或电⼦邮箱地址和验证码匹配结果属于您的个⼈敏感信息，我们收集该
      类信息是基于法律法规的相关要求，如您拒绝提供可能导致您⽆法注册账号并使⽤相关产品功能，请您
      谨慎考虑后再选择是否提供。<br/>
      4.2搜索<br/>
      当您在我们的产品中使⽤搜索功能时，我们需要收集您的⼀些信息，其中包括如下个⼈信息：您的设备
      信息、您的⽇志信息，包括您搜索的字或词、您的浏览记录和时间、您搜索的时间以及次数。我们收集
      这些信息是为了向您快速匹配您所需要的内容以及您可能感兴趣的内容，同时亦为了改进我们的产品和
      服务。<br/>
      4.3视频展示和播放<br/>
      我们的产品和/或服务为您提供视频展示和播放服务，在此过程中，我们需要收集您的⼀些信息，包括如
      下个⼈信息：设备型号、设备名称、设备唯⼀标识符、浏览器类型和设置、语⾔设置、操作系统和应⽤
      程序版本、登录IP地址、接⼊⽹络的⽅式、⽹络质量数据、移动⽹络信息、产品版本号、⽹络⽇志信息
      （如操作⽇志、服务⽇志）。同时为了收集上述基本的个⼈设备信息，我们将会申请访问您的设备信息
      的权限，我们收集这些信息是为了向您提供视频展示和播放服务，如您拒绝提供上述权限将可能导致您
      ⽆法使⽤我们的相关产品与服务。请您理解，单独的设备信息、⽇志信息等是⽆法识别特定⾃然⼈身份
      的信息。如果我们将这类⾮个⼈信息与其他信息结合⽤于识别特定⾃然⼈身份，或者将其与个⼈信息结
      合使⽤，则在结合使⽤期间，这类⾮个⼈信息将被视为个⼈信息，除取得您授权或法律法规另有规定
      外，我们会将该类个⼈信息做匿名化、去标识化处理。<br/>
      4.4客户服务<br/>
      当您向梦境旅⼈发起投诉、申诉或进⾏咨询时，为了您的账号与系统安全，我们可能需要您先⾏提供账
      号信息，并与您之前的个⼈信息相匹配以验证您的⽤户身份。同时，为了⽅便与您联系或帮助您解决问
      题，我们可能还需要您提供姓名、⼿机号码、电⼦邮件及其他联系⽅式等个⼈信息（个⼈敏感信息）。
      另外，我们还会收集您与我们的沟通信息（包括⽂字/图⽚/⾳视频/通话记录形式）、与您的需求相关联
      的其他必要信息。我们收集这些信息是为了调查事实与帮助您解决问题，如您拒绝提供上述信息，我们
      可能⽆法向您及时反馈投诉、申诉或咨询结果。<br/>
      4.5图⽂、视频分享<br/>
      当您在使⽤评论、弹幕、分享、发帖（包括投稿、动态和相簿）功能时，我们会收集您主动提供的上述
      图⽂、视频内容信息，同时我们还将为便于您分享视频和图⽚⽽经过您的同意后访问您的⼿机相册权
      限。同时，您也可以随时通过您的设备系统或使⽤的我们的产品与/或服务的相关功能设置⻚⾯开启/取
      消该权限。例如ios端梦境旅⼈APP的相册权限设置路径为：“我的—设置—隐私权限设置-允许梦境旅⼈
      访问相册权限”。您开启该权限即视为您授权我们可以访问、获取、收集、使⽤您的该等个⼈信息；当您
      取消该授权后，我们将不再收集该信息，也⽆法再为您提供上述与之对应的服务；但除⾮您依照法律的
      规定删除了您的个⼈信息，否则您的取消⾏为不会影响我们基于您之前的授权进⾏的对您个⼈信息的处
      理、存储。<br/>
      4.6扫描⼆维码、拍摄照⽚（含拍摄视频服务、直播服务）<br/>
      当您使⽤设备相机扫描⼆维码、拍摄照⽚、拍摄视频（包括直播）时，我们将访问您的设备相机相关权
      限，并收集您提供的基于扫描⼆维码、拍摄照⽚、拍摄视频后向我们上传的图⽚、视频信息。如您拒绝
      提供该权限和内容的，仅会使您⽆法使⽤该功能，但并不影响您正常使⽤产品与/或服务的其他功能。同
      时，您也可以随时通过您的设备系统或使⽤的我们的产品与/或服务的相关功能设置⻚⾯开启/取消该权
      限。例如ios端梦境旅⼈APP的相机权限设置路径为：“我的—设置—隐私权限设置—允许梦境旅⼈访问
      相机”。您开启该权限即视为您授权我们可以访问、获取、收集、使⽤您的该等个⼈信息；当您取消该授
      权后，我们将不再收集该信息，也⽆法再为您提供上述与之对应的服务；但除⾮您依照法律的规定删除
      了您的个⼈信息，否则您的取消⾏为不会影响我们基于您之前的授权进⾏的您个⼈信息的处理、存储。<br/>
      4.7录制视频、直播<br/>
      当您使⽤录制视频以及直播服务时我们将访问您的设备录⾳（⻨克⻛）相关权限，我们需要收集您的语
      ⾳信息、语⾳交互信息（个⼈信息）。如您拒绝提供的仅会使您⽆法使⽤该功能，但并不影响您正常使
      ⽤产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使⽤的我们的产品与/或服务的
      相关功能设置⻚⾯开启/取消该权限。例如ios端梦境旅⼈APP的⻨克⻛权限设置路径为：“我的—设置—
      隐私权限设置—允许梦境旅⼈访问⻨克⻛功能”。<br/>
      4.8预约、商品上线提醒<br/>
      当您使⽤预约（例如追番）、商品上线（例如票务预订、⼿办预定）提醒功能时我们将访问您的设备⽇
      历相关权限，我们需要收集您的⽇历信息（个⼈信息）。如您拒绝提供的仅会使您⽆法使⽤该功能，但
      并不影响您正常使⽤产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使⽤的我们的
      产品与/或服务的相关功能设置⻚⾯开启/取消该权限。例如安卓端梦境旅⼈APP的⽇历权限设置路径
      为：“个⼈中⼼—设置—隐私权限设置-允许梦境旅⼈访问⽇历信息”。<br/>
      4.9商品交易<br/>
      （1)当您在我们的产品与/或服务中购买商品（例如在会员购中购买⼿办）或服务的，您需要提供⼀些与
      完成交易相关联的信息，包括如下：交易的商品或服务信息、收货⼈信息（收货⼈姓名、收货地址及其
      联系电话）（个⼈敏感信息）。此外，我们也可能会再收集⼀些其他与订单相关的信息，包括：交易⾦
      额、下单时间、订单编号、订单状态、⽀付⽅式、⽀付流⽔号、⽀付状态，我们收集这些信息是为了帮
      助您顺利完成交易、保障您的交易安全、查询订单信息、提供客户服务等。进⼀步的，如果您的交易为
      跨境商品购买交易的，依据相关法律法规，我们还需要收集您的个⼈身份信息，包括身份证号码和身份
      证正反⾯照⽚（个⼈敏感信息）。<br/>
      （2)当您成功下单后，如商品系第三⽅卖家提供的或商品需要第三⽅配送的，我们为了顺利、安全、准
      确向您完成货物的交付及配送，商家及第三⽅配送公司在发货及配送环节内不可避免地会获知您的相关
      配送信息（个⼈信息）。我们向您承诺，我们会以最⼤努⼒保障您的个⼈信息安全，严格要求商家及第
      三⽅配送公司对您的个⼈信息保密，只以配送之⽬的获悉和使⽤，不得对外泄露或做其他任何⽤途。<br/>
      4.10⽀付<br/>
      当您在梦境旅⼈上开通⼤会员服务、订购商品、充值B币、购买⾦⽠⼦等发⽣⽀付⾏为时，需要使⽤到
      ⽀付功能。在⽀付过程中， 我们可能会收集您的第三⽅⽀付渠道的user ID (例如⽀付宝user ID、微信
      open ID、QQ钱包open ID或银⾏卡信息)（个⼈敏感信息）。上述信息为我们向您提供您购买商品和/
      或服务所必须的信息，我们⽆法仅根据该信息获得您的个⼈财产信息，也不能识别特定⾃然⼈身份信
      息。<br/>
      4.11定向推荐、维护/改进我们的产品与/或服务之必需<br/>
      （1)我们会基于收集的信息，对您的偏好、习惯、位置作特征分析和⽤户画像，以便为您提供更适合的
      定制化服务，例如向您展现或推荐相关程度更⾼（⽽⾮普遍推送）的搜索结果、视频内容、线下活动、
      信息流或者⼴告/推⼴信息结果。为此，我们需要收集的信息包括您的设备信息（例如硬件型号、设备
      MAC地址、IMEI、IMSI、必要的软件列表）、浏览器型号、⽇志信息、浏览记录、点赞/分享/评论/互动
      的对象、搜索的字词、位置（个⼈敏感信息）。例如：推荐您可能喜欢的番剧、⼴告、当前城市的漫展
      等。<br/>
      为保障您接收信息的⾃主性，当您对我们推荐的个性化内容不感兴趣或希望减少某些信息推荐时，您可
      以在app内通过点击推荐内容右下⻆的按钮，并选择相关理由，进⾏精准屏蔽。当您对我们推荐的个性
      化⼴告不感兴趣或希望不再接收此类个性化⼴告，您可以使⽤我们的产品与/或服务的相关功能设置⻚⾯
      开启/关闭个性化⼴告推荐。例如ios端梦境旅⼈APP的个性化⼴告推荐的设置路径为：“我的—设置—隐
      私权限设置—允许梦境旅⼈个性化展现⼴告推荐”。<br/>
      同时，如您不希望接收到我们为您推送的个性化内容，您可以随时使⽤我们的产品与/或服务的相关功能
      设置⻚⾯开启/关闭推送。例如ios端梦境旅⼈APP的内容推送设置路径为：“我的—设置—推送设置—推
      送我可能感兴趣的内容”。<br/>
      （2)特别地，为了满⾜会员购票务业务定位您所在位置周边的线下活动信息功能，我们将访问您的位置
      信息（个⼈敏感信息），您可以授权提供给我们您的位置信息（您知悉并同意，在某些特定业务场景
      下，为了提⾼业务处理能⼒、降低成本或其他⽅⾯考虑，我们可能会使⽤有能⼒的第三⽅定位SDK来获
      取您的相关信息，例如：使⽤“腾讯定位”SDK获取您的IMEI信息。但未经您的同意，我们不会主动将前
      述信息传输⾄该第三⽅），以便我们向您推荐所在地区的最新消息或更适合您的服务内容等。如您决定
      退出我们基于位置信息作出的个性化推荐/定向推送的，您可通过您设备的相关功能设置开启/取消该权
      限。<br/>
      （3)更进⼀步的，我们可能会收集您使⽤我们的产品与/或服务时的搜索记录、浏览记录、收藏记录、观
      看时⻓、订单信息、设备信息、点赞/分享/评论/互动的对象、您的偏向⽹络⾏为、兴趣偏好等信息形成
      ⽤户画像⽤于帮助使我们更加了解您如何接⼊和使⽤我们的产品与/或服务、维护和改进我们的产品与/
      或服务或对您作出其他⽅⾯的回应。<br/>
      4.12动态<br/>
      当您开启了您的设备定位功能并同时在发布动态时选择使⽤我们基于地理位置提供的定位功能时，我们
      可能会收集有关您的精准位置信息（个⼈敏感信息）。如您拒绝提供的仅会使您⽆法使⽤该功能，但并
      不影响您正常使⽤产品与/或服务的其他功能。同时，您也可以随时通过您的设备系统或使⽤的我们的产
      品与/或服务的相关功能设置⻚⾯开启/取消该权限。例如ios端梦境旅⼈APP的位置权限设置路径为：“我
      的—设置—隐私权限设置-允许梦境旅⼈访问位置信息”。您开启该权限即视为您授权我们可以访问、获
      取、收集、使⽤您的该等个⼈信息；但当您取消该授权后，我们将不再收集该信息，也⽆法再为您提供
      上述与之对应的服务；但除⾮您依照法律的规定删除了您的个⼈信息，否则您的取消⾏为不会影响我们
      基于您之前的授权进⾏的您个⼈信息的处理、存储。<br/>
      4.13认证服务<br/>
      我们为个⼈⽤户提供在梦境旅⼈平台的身份认证服务。当您申请梦境旅⼈为您进⾏身份认证时，我们需
      要收集您的姓名、身份证件号码、有关身份证明材料（个⼈敏感信息），以证实您的个⼈身份。我们会
      在对您个⼈信息的真实性进⾏审核后，会为您标记认证标识，并提供认证账号的专属服务。<br/>
      4.14视频及截图缓存<br/>
      当您使⽤安卓设备登录我们的产品并使⽤视频缓存、截图缓存功能时，我们可能会获取有关您设备的存
      储权限。如您拒绝提供的仅会使您⽆法使⽤该功能，但并不影响您正常使⽤产品与/或服务的其他功能。
      同时，您也可以随时通过您的设备系统或使⽤的我们的产品与/或服务的相关功能设置⻚⾯开启/取消该
      权限。例如安卓端梦境旅⼈APP的存储权限设置路径为：“个⼈中⼼—设置—隐私权限设置-允许梦境旅
      ⼈使⽤⽂件存储和访问功能”。您开启该权限即视为您授权我们可以访问、获取、收集、使⽤您的该等个
      ⼈信息；但当您取消该授权后，我们将不再收集该信息，也⽆法再为您提供上述与之对应的服务；但除
      ⾮您依照法律的规定删除了您的个⼈信息，否则您的取消⾏为不会影响我们基于您之前的授权进⾏的您
      个⼈信息的处理、存储。<br/>
      4.15从第三⽅间接收集的您的个⼈信息<br/>
      （1)您理解并知悉，您向外部第三⽅（梦境旅⼈旗下关联公司不在此限）提供的个⼈信息，或外部第三
      ⽅收集的您的个⼈信息，我们⽆法获取，更不会使⽤⾮常规⽅式（如：恶意⼲预对⽅系列APP数据）擅
      ⾃以软件程序获得您的个⼈信息。梦境旅⼈可能因业务发展的需要⽽确实需要从第三⽅间接收集（如共
      享等）您的个⼈信息的，且由我们直接或共同为您提供产品或服务的，我们（或第三⽅）在收集前会向
      您明示共享的您个⼈信息的来源、类型、使⽤⽬的、⽅式和所⽤于的业务功能、授权同意范围（如果使
      ⽤⽅式和范围超出您在第三⽅原授权范围的，我们会再次征得您的授权同意）。我们的某些产品或服务
      由第三⽅业务合作伙伴提供或共同提供时，为了必要且合理的开展业务，我们可能会从部分业务合作伙
      伴处间接收集的您的部分信息、其他⽅使⽤我们的产品与/或服务时所提供有关您的信息。<br/>
      （2)我们的专业安全团队对个⼈信息将进⾏安全加固（包括敏感信息报备、敏感信息加密存储、访问权
      限控制等）。我们会使⽤不低于我们对⾃身⽤户个⼈信息同等的保护⼿段与措施对间接获取的个⼈信息
      进⾏保护。<br/>
      4.16出于其他合理且必要的⽬的<br/>
      （1)如前⽂所述，如果某⼀需要收集您的个⼈信息的功能或产品/服务未能在本隐私政策中予以说明的，
      或者我们超出了与收集您的个⼈信息时所声称的⽬的及具有直接或合理关联范围的，我们将在收集和使
      ⽤您的个⼈信息前，通过更新本隐私政策、⻚⾯提示、弹窗、站内信、⽹站公告或其他便于您获知的⽅
      式另⾏向您说明，并为您提供⾃主选择同意的⽅式，且在征得您明示同意后收集和使⽤。<br/>
      （2)您理解并同意，在以下情况下，我们⽆需取得您的授权同意即可收集和使⽤您的个⼈信息：<br/>
      a)与国家安全、国防安全有关的；<br/>
      b)与公共安全、公共卫⽣、重⼤公共利益有关的；<br/>
      c)与犯罪侦查、起诉、审判和判决执⾏等直接相关的；<br/>
      d)出于维护您或其他个⼈的⽣命、财产等重⼤合法权益但⼜很难得到您本⼈同意的；<br/>
      e)所收集的信息是您⾃⾏向社会公开的或者是从合法公开的渠道（如合法的新闻报道、政府信息公开等
      渠道）中收集到的；<br/>
      f)根据与您签订和履⾏相关协议或其他书⾯⽂件所必需的；<br/>
      g)⽤于维护我们的产品与/或服务的安全稳定运⾏所必需的，例如发现、处置产品与/或服务的故障；<br/>
      h)有权机关的要求、法律法规等规定的其他情形。
      </p>
      <h2>四、我们如何共享、转让、公开披露您的个⼈信息</h2>
      <p>
      1.共享<br/>
      我们重视对您的个⼈信息的保护，您的个⼈信息是我们为您提供产品与/或服务的重要依据和组成部分，
      对于您的个⼈信息，我们仅在本隐私政策所述⽬的和范围内或根据法律法规的要求收集和使⽤，并严格
      保密。通常情况下，我们不会与任何公司、组织和个⼈共享您的个⼈信息，但以下情况除外：<br/>
      1.1事先已获得您的明确授权或同意；<br/>
      1.2根据适⽤的法律法规、法律程序、政府的强制命令或司法裁定⽽需共享您的个⼈信息；<br/>
      1.3在法律要求或允许的范围内，为了保护梦境旅⼈及其⽤户或社会公众的利益、财产或安全免遭损害
      ⽽有必要提供您的个⼈信息给第三⽅；<br/>
      1.4您的个⼈信息可能会在我们的关联公司之间共享。我们只会共享必要的个⼈信息，且这种共享亦受
      本隐私政策声明⽬的的约束。关联公司如要改变个⼈信息的处理⽬的，将再次征求您的授权同意；<br/>
      1.5为了向您提供更完善、优质的产品和服务，我们的某些服务将由授权合作伙伴提供。我们可能会与
      合作伙伴共享您的某些个⼈信息，以提供更好的客户服务和⽤户体验。我们仅会出于合法、正当、必
      要、特定、明确的⽬的共享您的个⼈信息，并且只会共享提供服务所必要的个⼈信息。同时，我们会与
      合作伙伴签署严格的保密协定，要求他们按照我们的说明、本隐私政策以及其他任何相关的保密和安全
      措施来处理您的个⼈信息。我们的合作伙伴⽆权将共享的个⼈信息⽤于任何其他⽤途。如果您拒绝我们
      的合作伙伴在提供服务时收集为提供服务所必须的个⼈信息，将可能导致您⽆法在我们的平台中使⽤该
      第三⽅服务。通常我们的合作伙伴有如下⼏类：<br/>
      （1)为我们的产品与/或服务提供功能⽀持的服务提供商：例如提供⽀付服务的⽀付机构、提供配送服务
      的第三⽅公司和其他服务提供商（如互联⽹电视播控牌照⽅），我们共享信息的⽬的仅为实现我们产品
      与/或服务的功能；<br/>
      （2)我们平台的第三⽅商家：为实现您购买产品或服务的需求（包括享受售后服务），我们会将您的订
      单信息与交易相关的信息共享给我们平台的第三⽅商家。例如，当您在梦境旅⼈会员购订购演出票务
      时，梦境旅⼈会向该演出的主办⽅提供您的必要信息，以便向您寄送演出⻔票。<br/>
      （3)第三⽅SDK类服务商：我们的产品中可能会包含第三⽅SDK或其他类似的应⽤程序，如您在我们平
      台上使⽤这类由第三⽅提供的服务时，您同意将由其直接收集和处理您的信息（如以嵌⼊代码、插件等
      形式）。例如：您使⽤华为⼿机的，华为Push SDK需要读取您的IMEI信息，⽤于推送/下发通知栏消息
      （如您使⽤其他品牌的，各⼿机品牌也有类似的Push SDK）；您使⽤⽀付宝付款的，为了让您完成交
      易、实现交易⽬的，⽀付宝SDK需要读取您的IMEI信息；您把在梦境旅⼈的内容分享到第三⽅平台，如
      微博，其SDK可能会收集您提供的信息；我们可能会使⽤友盟 SDK 来统计⽤户使⽤产品或服务的活跃
      度，友盟 SDK可能需要读取您的设备信息；我们会使⽤腾讯bugly SDK来统计您在使⽤我们产品或服务
      过程中出现的崩溃或⽆响应等状况，bugly SDK可能需要读取您的设备信息。前述服务商收集和处理信
      息等⾏为遵守其⾃身的隐私条款，⽽不适⽤于本政策。为了最⼤程度保障您的信息安全，我们建议您在
      使⽤任何第三⽅SDK类服务前先⾏查看其隐私条款。为保障您的合法权益，如您发现这等SDK或其他类
      似的应⽤程序存在⻛险时，建议您⽴即终⽌相关操作并及时与我们取得联系。<br/>
      （4)委托我们进⾏信息推⼴和⼴告投放的合作伙伴：您确认我们有权与委托我们进⾏信息推⼴和⼴告投
      放的合作伙伴共享我们使⽤您的相关信息集合形成的间接⽤户画像、去标识化或匿名化处理后的分析/
      统计类信息（例如「位于上海的⼆⼗代男性，喜欢⾳乐」），以帮助其进⾏⼴告或决策建议、提⾼⼴告
      有效触达率、进⼀步了解⽤户需求。我们承诺：未经您的同意，我们不会与其共享可以识别您身份的个
      ⼈信息。<br/>
      2.转让<br/>
      除⾮获取您的明确同意，我们不会将您的个⼈信息转让给任何公司、组织或个⼈。如果发⽣合并、收购
      或破产清算，将可能涉及到个⼈信息转让，此种情况下我们会要求新的持有您个⼈信息的公司、组织继
      续受本隐私政策的约束。如果本隐私政策中约定的个⼈信息的收集、处理⽅式发⽣任何改变，该公司、
      组织将重新向您征求授权同意。<br/>
      3.公开披露<br/>
      3.1公开披露是指向社会或不特定⼈群发布信息的⾏为。除了因需要对违规账号、欺诈⾏为等进⾏处罚
      公告、公布中奖/获胜者等名单时脱敏展示相关信息等必要事宜⽽进⾏的必要披露外，我们不会对您的个
      ⼈信息进⾏公开披露，如具备合理事由确需公开披露的，我们会在公开披露前向您告知公开披露的信息
      的⽬的、类型（如涉及您的个⼈敏感信息的，我们还会向您告知涉及的敏感信息的内容），并在征得您
      的授权同意后再公开披露，但法律法规另有规定的或本政策另有约定的除外。<br/>
      3.2对于公开披露的您的个⼈信息，我们会在收到公开披露申请后第⼀时间且审慎审查其正当性、合理
      性、合法性，并在公开披露时和公开披露后采取最严格个⼈信息安全保护措施和⼿段对其进⾏保护。<br/>
      4.共享、转让、公开披露您的个⼈信息的例外<br/>
      请您知悉， 根据法律法规的规定，在下述情况下，共享、转让、公开披露您的个⼈信息⽆需事先征得您
      的授权同意：<br/>
      4.1与国家安全、国防安全直接相关的；<br/>
      4.2与公共安全、公共卫⽣、重⼤公共利益直接相关的；<br/>
      4.3与犯罪侦查、起诉、审判和判决执⾏等直接相关的；或根据法律法规的要求、⾏政机关或公检法等
      有权机关的要求的；<br/>
      4.4出于维护您或其他个⼈的⽣命、财产等重⼤合法权益但⼜很难得到您本⼈同意的；<br/>
      4.5个⼈信息是您⾃⾏向社会公开的或者是从合法公开的渠道（如合法的新闻报道、政府信息公开等渠
      道）中收集到的；<br/>
      4.6根据与您签订和履⾏相关协议或其他书⾯⽂件所必需的；<br/>
      4.7法律法规等规定的其他情形。
      </p>
      <h2>五、关于使⽤Cookie和同类技术</h2>
      <p>
      1.在您使⽤我们的产品与/或服务时，我们可能会使⽤Cookie和同类技术收集您的⼀些个⼈信息，包括：
      您访问⽹站的习惯、您的浏览信息、您的登录信息，Cookie和同类技术收集该类信息是为了您使⽤我们
      的产品与/或服务的必要、简化您重复操作的步骤（如注册、登录）、便于您查看使⽤历史（如视频观看
      历史）、向您提供更切合您个⼈需要的服务内容和您可能更感兴趣的内容、保护您的信息和账号安全
      性、提升我们的产品和服务等。<br/>
      2.如果您拒绝我们使⽤Cookie及同类技术收集和使⽤您的相关信息，您可在浏览器具备该功能的前提
      下，通过您的浏览器的设置以管理、（部分/全部）拒绝Cookie与/或同类技术；或删除已经储存在您的
      计算机、移动设备或其他装置内的Cookie与/或同类技术，从⽽实现我们⽆法全部或部分追踪您的个⼈
      信息。您如需详细了解如何更改浏览器设置，请具体查看您使⽤的浏览器的相关设置⻚⾯。您理解并知
      悉：我们的某些产品/服务只能通过使⽤Cookie或同类技术才可得到实现，如您拒绝使⽤或删除的，您
      可能将⽆法正常使⽤我们的相关产品与/或服务或⽆法通过我们的产品与/或服务获得最佳的服务体验，
      同时也可能会对您的信息保护和账号安全性造成⼀定的影响。
      </p>
      <h2>六、我们对您个⼈信息的存储与保护</h2>
      <p>
      1.信息存储<br/>
      1.1存储地点：我们依照法律法规的规定，仅会将收集到的有关您的个⼈信息存储于中华⼈⺠共和国境
      内。⽬前我们暂时不存在跨境存储您的个⼈信息或向境外提供个⼈信息的场景。如果确有必要进⾏数据
      的跨境传输，我们会单独向您明确告知（包括数据出境的⽬的、接收⽅、使⽤⽅式与范围、使⽤内容、
      安全保障措施、安全⻛险等），并征得您的授权同意，我们会确保数据接收⽅有充⾜的数据保护能⼒来
      保护您的个⼈信息。<br/>
      1.2存储期限：我们在为您提供满⾜产品和服务⽬的所必需且最短的期间内保留您的个⼈信息，例如：
      当您使⽤我们的注册及会员功能时，我们需要收集您的⼿机号码，且在您提供后并在您使⽤该功能期
      间，我们需要持续保存您的⼿机号码，以向您正常提供该功能、保障您的账号和系统安全。此外，我们
      或对您的相关信息保存⾄相关法律所规定的必要期限（例如《电⼦商务法》规定：商品和服务信息、交
      易信息保存时间⾃交易完成之⽇起不少于三年）。<br/>
      1.3在超出上述存储期限后，我们会对您的个⼈信息进⾏删除或匿名化处理。<br/>
      2.信息保护<br/>
      2.1您的个⼈信息安全对于我们⾄关重要。我们将严格遵守相关法律法规，采取业内认可的合理可⾏的
      措施，保护您的个⼈信息。防⽌信息遭到未经授权的访问、披露、使⽤、修改，避免信息损坏或丢失。<br/>
      2.2我们使⽤符合业界标准的安全防护措施保护您提供的个⼈信息，防⽌数据遭到未经授权的访问、公
      开披露、使⽤、修改，防⽌数据发⽣损坏或丢失。我们会采取⼀切合理可⾏的措施，保护您的个⼈信
      息。例如使⽤SSL对数据进⾏加密保护；我们已建⽴访问控制机制，确保只有授权⼈员才可以访问个⼈
      信息；我们不时的举办安全和隐私保护培训课程，加强员⼯对于保护个⼈信息重要性的认识。
      </p>
      <h2>七、您管理个⼈信息的权利</h2>
      <p>
      我们理解您对个⼈信息的关注，并尽全⼒确保您对于⾃⼰个⼈信息访问、更正、删除以及撤回授权的权
      利，以使您拥有充分的能⼒保障您的隐私和安全。您的权利包括：<br/>
      1.您有权访问您的个⼈信息<br/>
      您可以按照我们提供的产品和服务的相关说明（或设置），对您已提供给我们的相关个⼈信息进⾏查
      阅。包括：<br/>
      1.1账号信息：您可以通过相关产品⻚⾯随时登陆您的个⼈中⼼，以访问您账号中的个⼈资料信息，包
      括：头像、昵称、UID、⼆维码名⽚、性别、出⽣年⽉、个⼈签名等；<br/>
      1.2使⽤信息：您可以通过相关产品⻚⾯随时查阅您的使⽤信息，包括：动态发布内容、投稿内容、收
      藏记录、历史记录、订单信息、地址信息、账单记录等；<br/>
      1.3其他信息：如您在访问过程中遇到操作问题需获取其他前述⽆法获知的个⼈信息内容，您可通过本
      隐私政策提供的⽅式联系我们。<br/>
      2.您有权更正/修改您的个⼈信息<br/>
      当您发现您提供给我们的个⼈信息存在登记错误、不完整或有更新的，您可在我们的产品和/或服务中更
      正/修改您的个⼈信息。<br/>
      2.1对于您的部分个⼈信息，我们在产品的相关功能⻚⾯为您提供了操作设置，您可以直接进⾏更正/修
      改，例如：“头像/昵称/性别/出⽣年⽉/个⼈签名”在梦境旅⼈ios客户端中的更正/<br/>修改路径为：点击头像编辑资料。<br/>
      2.2对于您在⾏使上述权利过程中遇到的困难，或者其他可能⽬前⽆法向您提供在线⾃⾏更正/修改服务
      的，经过对您身份的验证，且更正/修改不影响信息的客观性和准确性的情况下，您有权对错误或不完整
      的信息作出更正或修改，或在特定情况下，尤其是数据错误时，通过我们公布的反馈与报错等措施将您
      的更正/修改申请提交给我们，要求我们更正或修改您的数据，但法律法规另有规定的除外。但出于安全
      性和身份识别的考虑，您可能⽆法修改注册时提交的某些初始注册信息。<br/>
      3.您有权删除您的个⼈信息<br/>
      3.1对于您的部分个⼈信息，您也可以⾃⾏通过我们提供的相关产品和服务的功能⻚⾯，主动删除您提
      供信息。例如：“历史记录”信息在梦境旅⼈ios客户端中的删除路径为：我的-历史记录-编辑。您也可以
      ⾃主删除您发布的视频、动态、图⽚等。⼀旦您删除后，我们即会对此类信息进⾏删除或匿名化处理，
      除⾮法律法规另有规定。<br/>
      3.2当发⽣以下情况时，您可以直接要求我们删除您的个⼈信息，但已做匿名化处理或法律法规另有规
      定的除外：<br/>
      （1）当我们处理个⼈信息的⾏为违反法律法规时；<br/>
      （2）当我们收集、使⽤您的个⼈信息，却未征得您的同意时；<br/>
      （3）当我们处理个⼈信息的⾏为违反了与您的约定时；<br/>
      （4）当您注销了梦境旅⼈账号时；<br/>
      （5）当我们终⽌服务及运营时。<br/>
      4.您有权撤回您对个⼈信息的授权<br/>
      如前⽂所述，我们提供的产品和服务的部分功能需要获得您使⽤设备的相关权限（包括：位置、相机、
      ⻨克⻛、⽇程安排等，具体以产品实际获取的功能为准）。您可以在授权后随时撤回（或停⽌）对该权
      限的继续授权。例如您可以通过ios设备中的“设置-隐私-照⽚”来关闭您对⼿机相册的授权。您也可以通
      过注销账号的⽅式，永久撤回我们继续收集您个⼈信息的全部授权。您需理解，当您撤回授权后，我们
      ⽆法继续为您提供撤回授权所对应的特定功能和/或服务。但您撤回授权的决定，不会影响此前基于您的
      授权⽽开展的个⼈信息处理。<br/>
      5.您有权注销您的账号<br/>
      您可以通过在线申请注销或客服或通过其他我们公示的⽅式申请注销您的账号。当您注销账号后，您将
      ⽆法再以该账号登录和使⽤我们的产品与服务；且该账号在梦境旅⼈及旗下的其他产品与服务使⽤期间
      已产⽣的但未消耗完毕的权益及未来的逾期利益等全部权益将被清除；该账号下的内容、信息、数据、
      记录等将会被删除或匿名化处理（但法律法规另有规定或监管部⻔另有要求的除外，如依据《中华⼈⺠
      共和国⽹络安全法》规定，您的⽹络操作⽇志将⾄少保留六个⽉的时间）；梦境旅⼈账号注销完成后，
      将⽆法恢复。<br/>
      如您在谨慎考虑后仍执意决定注销您的梦境旅⼈账号的，您可以在您使⽤的我们的产品与/或服务的相关
      功能设置⻚⾯或根据操作指引向我们提交注销申请，例如ios端梦境旅⼈APP的注销路径为：“我的—设
      置—隐私权限设置-账号注销”。<br/>
      如果您在处置您的个⼈信息时有任何疑问，您可以通过本隐私政策第⼗条“联系我们”中公示的联系⽅式
      与我们沟通解决。
      </p>
      <h2>⼋、我们对未成年⼈的保护</h2>
      <p>
      1.未成年⼈使⽤我们的产品与/或服务前应取得其监护⼈的同意。如您为未成年⼈，在使⽤我们的产品
      与/或服务前，应在监护⼈监护、指导下共同阅读本隐私政策且应在监护⼈明确同意和指导下使⽤我们
      的产品与/或服务、提交个⼈信息。我们根据国家相关法律法规的规定保护未成年⼈的个⼈信息，只会
      在法律法规允许、监护⼈明确同意或保护您的权益所必要的情况下收集、使⽤或公开披露未成年⼈的个
      ⼈信息。<br/>
      2.若您是未成年⼈的监护⼈，当您对您所监护的未成年⼈的个⼈信息有相关疑问时，您可以通过本隐私
      政策第⼗条“联系我们”中公示的联系⽅式与我们沟通解决。如果我们发现在未事先获得可证实的监护⼈
      同意的情况下收集了未成年⼈的个⼈信息，则会尽快删除相关数据。
      </p>
      <h2>九、联系我们</h2>
      <p>
      1.如您对本《梦境旅⼈隐私政策》的内容或使⽤我们的服务时遇到的与隐私保护相关的事宜有任何疑问
      或进⾏咨询或投诉时，您均可以通过如下任⼀⽅式与我们取得联系：<br/>
      1.1您可找到我们平台上产品功能⻚⾯中在线客服与其联系或者在线提交反馈意⻅；<br/>
      1.2您可以拨打13147051405客服电话与我们联系；<br/>
      1.3您可以向我们开通的a1181882120@gmail.com客服邮箱发送邮件与我们联系；<br/>
      2.我们会在收到您的意⻅及建议后，并在验证您的⽤户身份后的30⽇内尽快向您回复。此外，您理解并
      知悉，在与个⼈信息有关的如下情形下，我们将⽆法回复您的请求：<br/>
      2.1与国家安全、国防安全有关的；<br/>
      2.2与公共安全、公共卫⽣、重⼤公共利益有关的；<br/>
      2.3与犯罪侦查、起诉和审判等有关的；<br/>
      2.4有充分证据表明您存在主观恶意或滥⽤权利的；<br/>
      2.5响应您的请求将导致您或其他个⼈、组织的合法权益受到严重损害的；<br/>
      2.6涉及商业秘密的；<br/>
      2.7法律法规等规定的其他情形。
      </p>
      <h2>⼗、本政策如何更新</h2>
      <p>
      1.为了给您提供更好的服务，我们会根据产品的更新情况及法律法规的相关要求更新本《隐私政策》的
      条款，该等更新构成本《隐私政策》的⼀部分。未经您明确同意，我们不会削减您按照本政策所应享有
      的权利。如该等更新造成您在本《隐私政策》下权利的实质减少或重⼤变更，我们将在本政策⽣效前通
      过在显著位置提示或向您发送推送消息或以其他⽅式通知您，若您继续使⽤我们的服务，即表示您充分
      阅读、理解并同意受经修订的《隐私政策》的约束。<br/>
      2.重⼤变更包括但不限于：<br/>
      2.1我们的服务模式发⽣重⼤变化。如处理个⼈信息的⽬的、处理的个⼈信息类型、个⼈信息的使⽤⽅
      式等；<br/>
      2.2我们在所有权结构、组织架构等⽅⾯发⽣重⼤变化。如业务调整、破产并购等引起的所有者变更
      等；<br/>
      2.3个⼈信息共享、转让或公开披露的主要对象发⽣变化；<br/>
      2.4您参与个⼈信息处理⽅⾯的权利及其⾏使⽅式发⽣重⼤变化；<br/>
      2.5我们负责处理个⼈信息安全的责任部⻔、联络⽅式及投诉渠道发⽣变化；<br/>
      2.6个⼈信息安全影响评估报告表明存在⾼⻛险时。
      </p>
      <h2>⼗⼀、争议解决</h2>
      <p>
      1.本隐私政策的解释及争议解决均应适⽤中华⼈⺠共和国⼤陆地区法律。任何因本隐私政策以及我们处
      理您个⼈信息事宜引起的争议，您同意向⼴州仲裁委员会提起仲裁解决；该仲裁⼀裁终局，对双⽅均具
      有法律约束⼒。<br/>
      2.如果您认为我们处理个⼈信息的⾏为损害了您的合法权益，您也可以选择向有关政府部⻔进⾏反映。<br/>
      3.本隐私政策的标题仅为⽅便及阅读⽽设，并不影响正⽂其中任何规定的含义或解释。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agreement',
  data () {
    return {

    }
  },
  methods: {
    back_click() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
  .box {
    background-color: #201624;
    height: 100vh;
    color: #fff;
  }
  .header{
    height:1.28rem;
    line-height: 1.28rem;
    text-align: center;
    font-size: .36rem;
    position: relative;
  }
  .back_btn{
    display: inline-block;
    position: absolute;
    left:0;
    padding:0 .5rem;
    font-size:.4rem;
  }
  .content {
    padding: .5rem;
    overflow-y: auto;
    height: calc( 100vh - 2.3rem );
  }
  h1 {
    font-size: .42rem;
    margin-bottom: .3rem;
  }
  h2 {
    font-size: .3rem;
    color: rgba(255,255,255,0.7);
    line-height: .35rem;
    margin-bottom: .1rem;
    font-weight: bold
  }
  h3 {
    font-size: .24rem;
    color: rgba(255,255,255,0.3);
    line-height: .35rem;
  }
  p {
    font-size: .28rem;
    color: rgba(255,255,255,0.5);
    margin: .2rem 0;
    line-height: .4rem
  }
  strong {
    font-weight: bold;
    color: rgba(255,255,255,0.6);
  }
</style>