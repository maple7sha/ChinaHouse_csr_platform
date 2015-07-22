
var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">中南屋 - 中国在肯负责任投资线上倡导平台</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="about.html">新闻</a>
                    </li>
                    <li>
                        <a href="services.html">专栏</a>
                    </li>
                    <li>
                        <a href="contact.html">项目</a>
                    </li>
                    <li>
                        <a href="about.html">关于</a>
                    </li>
                    <li>
                        <a href="contact.html">联系方式</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
});

React.render(
  <Header />,
  document.getElementById('header')
);

