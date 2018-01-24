am.startRouter ( {


	/** 
		可配置的值: 
		am.HASH(使用hash模式) |
		am.BROWSER(使用html5 history API模式) |
		am.AUTO(在支持html5 history API时使用新特性，不支持的情况下自动回退到hash模式)
	*/
	history : am.HASH,

	// 基础路径
	baseURL : {
		module : "module",
		plugin : "plugin",
		component : "component"
	},

	// 路由配置
	// [注意] 调用route()前必须调用module()定义一个模块
	routes : function (router) {
		router.module()
		.route("/", "index/index", function (childRouter) {
			childRouter.module ("footer").route ("", "footer");
		});

		// 404错误路径
		// router.error404 ( "/404" );
	}
} );