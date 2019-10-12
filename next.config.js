const withCSS=require( "@zeit/next-css" );
const withLess=require( "@zeit/next-less" );
const withSass=require( "@zeit/next-sass" );
const withImages=require( "next-images" )
module.exports=withImages( withLess(
	withCSS(
		withSass()
	) )
);
