webpackJsonp([30],{1403:function(t,e,n){var o=n(3),a=n(79),i=n(615).PageRenderer;i.__esModule&&(i=i.default);var r=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1439)}},componentWillMount:function(){},render:function(){return o.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,t.exports=r},1439:function(t,e){t.exports='```react\nshowSource: true\n---\n<ButtonDemo>\n\t<Button primaryOutline medium styleOverrides={{ width: \'80px\' }}>\n\t\tCancel\n\t</Button>\n\t<Button primary medium styleOverrides={{ width: \'80px\' }}>\n\t\tOK\n\t</Button>\n</ButtonDemo>\n```\n\nIt\'s common to need both a commit action ("OK", "Done", "Save") right next to a cancel action. Faithlife house style is:\n\n* "Cancel" on the left, "OK" on the right.\n* Cancel/Okay buttons go at the bottom of the dialog (or section) they govern.\n* This is because you read forms from top-left (start) to bottom-right (end), and we want the default action ("OK") at the logical end. Otherwise, people accidentally hit "Cancel".\n* If the actions govern a whole page, then they go at the top-right of the page, in line with the page headline. Again, "OK" at the far right.\n* Cancel/Okay buttons may be repeated at the bottom of a long page.\n* We know that other companies do this differently, and that\'s okay.\n'}});
//# sourceMappingURL=30.e9cf1c76.chunk.js.map