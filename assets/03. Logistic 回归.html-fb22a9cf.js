const s=JSON.parse('{"key":"v-3cf2c9e5","path":"/posts/02.%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%88%9D%E5%AD%A6%E8%80%85/03.%20Logistic%20%E5%9B%9E%E5%BD%92.html","title":"Logistic 回归","lang":"zh-CN","frontmatter":{"title":"Logistic 回归","date":"2022-10-15T20:21:16.000Z","category":["AI"],"tag":["机器学习"],"description":"Logistic 回归 Logistic 回归算法简介 逻辑回归是机器学习中的经典分类问题，属于对数线性模型，又称对数几率回归。Logistic 回归可以看作预测值为 “标签的对数几率” 的线性回归模型 对数几率函数 ​\\t一种 “Sigmoid 函数”，优点单调可微，任意阶可导。 Pw,b​(y∣xi​)=σ(z)σ(z)=1+e−z1​","head":[["meta",{"property":"og:url","content":"https://crush598.github.io/posts/02.%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%88%9D%E5%AD%A6%E8%80%85/03.%20Logistic%20%E5%9B%9E%E5%BD%92.html"}],["meta",{"property":"og:site_name","content":"Hush"}],["meta",{"property":"og:title","content":"Logistic 回归"}],["meta",{"property":"og:description","content":"Logistic 回归 Logistic 回归算法简介 逻辑回归是机器学习中的经典分类问题，属于对数线性模型，又称对数几率回归。Logistic 回归可以看作预测值为 “标签的对数几率” 的线性回归模型 对数几率函数 ​\\t一种 “Sigmoid 函数”，优点单调可微，任意阶可导。 Pw,b​(y∣xi​)=σ(z)σ(z)=1+e−z1​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:tag","content":"机器学习"}],["meta",{"property":"article:published_time","content":"2022-10-15T20:21:16.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://crush598.github.io/en/posts/02.%20%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%88%9D%E5%AD%A6%E8%80%85/03.%20Logistic%20%E5%9B%9E%E5%BD%92.html"}]]},"headers":[{"level":2,"title":"Logistic 回归算法简介","slug":"logistic-回归算法简介","link":"#logistic-回归算法简介","children":[]},{"level":2,"title":"模型参数估计 -- 极大似然法","slug":"模型参数估计-极大似然法","link":"#模型参数估计-极大似然法","children":[{"level":3,"title":"损失函数","slug":"损失函数","link":"#损失函数","children":[]},{"level":3,"title":"梯度下降法","slug":"梯度下降法","link":"#梯度下降法","children":[]},{"level":3,"title":"牛顿法（占坑）","slug":"牛顿法-占坑","link":"#牛顿法-占坑","children":[]}]},{"level":2,"title":"类别不均衡问题","slug":"类别不均衡问题","link":"#类别不均衡问题","children":[]}],"git":{},"readingTime":{"minutes":3.37,"words":1010},"localizedDate":"2022年10月16日","filePathRelative":"posts/02. 机器学习初学者/03. Logistic 回归.md","excerpt":"<h1> Logistic 回归</h1>\\n<h2> Logistic 回归算法简介</h2>\\n<p>逻辑回归是机器学习中的经典分类问题，属于对数线性模型，又称对数几率回归。Logistic 回归可以看作预测值为 <mark>“标签的对数几率”</mark> 的线性回归模型</p>\\n<div class=\\"custom-container note\\">\\n<p class=\\"custom-container-title\\">对数几率函数</p>\\n<p>​\\t一种 “Sigmoid 函数”，优点单调可微，任意阶可导。</p>\\n</div>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0361em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">P</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3361em;\\"><span style=\\"top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.02691em;\\">w</span><span class=\\"mpunct mtight\\">,</span><span class=\\"mord mathnormal mtight\\">b</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">y</span><span class=\\"mord\\">∣</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.04398em;\\">z</span><span class=\\"mclose\\">)</span></span><span class=\\"mspace newline\\"></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.03588em;\\">σ</span><span class=\\"mopen\\">(</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.04398em;\\">z</span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:2.0908em;vertical-align:-0.7693em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:1.3214em;\\"><span style=\\"top:-2.314em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">+</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">e</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6973em;\\"><span style=\\"top:-2.989em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">−</span><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.04398em;\\">z</span></span></span></span></span></span></span></span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.677em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord\\"><span class=\\"mord\\">1</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.7693em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span></span></span></span></span></p>","copyright":{"author":"Hush"},"autoDesc":true}');export{s as data};
