(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{47:function(t,i,o){(function(){var i;function o(t,i,o){null!=t&&("number"==typeof t?this.fromNumber(t,i,o):null==i&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,i))}function r(){return new o(null)}var s="undefined"!=typeof navigator;s&&"Microsoft Internet Explorer"==navigator.appName?(o.prototype.am=function(t,i,o,r,s,h){for(var e=32767&i,n=i>>15;--h>=0;){var f=32767&this[t],u=this[t++]>>15,p=n*f+u*e;s=((f=e*f+((32767&p)<<15)+o[r]+(1073741823&s))>>>30)+(p>>>15)+n*u+(s>>>30),o[r++]=1073741823&f}return s},i=30):s&&"Netscape"!=navigator.appName?(o.prototype.am=function(t,i,o,r,s,h){for(;--h>=0;){var e=i*this[t++]+o[r]+s;s=Math.floor(e/67108864),o[r++]=67108863&e}return s},i=26):(o.prototype.am=function(t,i,o,r,s,h){for(var e=16383&i,n=i>>14;--h>=0;){var f=16383&this[t],u=this[t++]>>14,p=n*f+u*e;s=((f=e*f+((16383&p)<<14)+o[r]+s)>>28)+(p>>14)+n*u,o[r++]=268435455&f}return s},i=28),o.prototype.DB=i,o.prototype.DM=(1<<i)-1,o.prototype.DV=1<<i;o.prototype.FV=Math.pow(2,52),o.prototype.F1=52-i,o.prototype.F2=2*i-52;var h,e,n=new Array;for(h="0".charCodeAt(0),e=0;e<=9;++e)n[h++]=e;for(h="a".charCodeAt(0),e=10;e<36;++e)n[h++]=e;for(h="A".charCodeAt(0),e=10;e<36;++e)n[h++]=e;function f(t){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)}function u(t,i){var o=n[t.charCodeAt(i)];return null==o?-1:o}function p(t){var i=r();return i.fromInt(t),i}function a(t){var i,o=1;return 0!=(i=t>>>16)&&(t=i,o+=16),0!=(i=t>>8)&&(t=i,o+=8),0!=(i=t>>4)&&(t=i,o+=4),0!=(i=t>>2)&&(t=i,o+=2),0!=(i=t>>1)&&(t=i,o+=1),o}function c(t){this.m=t}function m(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function l(t,i){return t&i}function v(t,i){return t|i}function T(t,i){return t^i}function y(t,i){return t&~i}function d(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function D(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function b(){}function g(t){return t}function S(t){this.r2=r(),this.q3=r(),o.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}c.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},c.prototype.revert=function(t){return t},c.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},c.prototype.mulTo=function(t,i,o){t.multiplyTo(i,o),this.reduce(o)},c.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)},m.prototype.convert=function(t){var i=r();return t.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),t.s<0&&i.compareTo(o.ZERO)>0&&this.m.subTo(i,i),i},m.prototype.revert=function(t){var i=r();return t.copyTo(i),this.reduce(i),i},m.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var o=32767&t[i],r=o*this.mpl+((o*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[o=i+this.m.t]+=this.m.am(0,r,t,i,0,this.m.t);t[o]>=t.DV;)t[o]-=t.DV,t[++o]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},m.prototype.mulTo=function(t,i,o){t.multiplyTo(i,o),this.reduce(o)},m.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)},o.prototype.copyTo=function(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s},o.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+this.DV:this.t=0},o.prototype.fromString=function(t,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(t,i);r=2}this.t=0,this.s=0;for(var s=t.length,h=!1,e=0;--s>=0;){var n=8==r?255&t[s]:u(t,s);n<0?"-"==t.charAt(s)&&(h=!0):(h=!1,0==e?this[this.t++]=n:e+r>this.DB?(this[this.t-1]|=(n&(1<<this.DB-e)-1)<<e,this[this.t++]=n>>this.DB-e):this[this.t-1]|=n<<e,(e+=r)>=this.DB&&(e-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,e>0&&(this[this.t-1]|=(1<<this.DB-e)-1<<e)),this.clamp(),h&&o.ZERO.subTo(this,this)},o.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},o.prototype.dlShiftTo=function(t,i){var o;for(o=this.t-1;o>=0;--o)i[o+t]=this[o];for(o=t-1;o>=0;--o)i[o]=0;i.t=this.t+t,i.s=this.s},o.prototype.drShiftTo=function(t,i){for(var o=t;o<this.t;++o)i[o-t]=this[o];i.t=Math.max(this.t-t,0),i.s=this.s},o.prototype.lShiftTo=function(t,i){var o,r=t%this.DB,s=this.DB-r,h=(1<<s)-1,e=Math.floor(t/this.DB),n=this.s<<r&this.DM;for(o=this.t-1;o>=0;--o)i[o+e+1]=this[o]>>s|n,n=(this[o]&h)<<r;for(o=e-1;o>=0;--o)i[o]=0;i[e]=n,i.t=this.t+e+1,i.s=this.s,i.clamp()},o.prototype.rShiftTo=function(t,i){i.s=this.s;var o=Math.floor(t/this.DB);if(o>=this.t)i.t=0;else{var r=t%this.DB,s=this.DB-r,h=(1<<r)-1;i[0]=this[o]>>r;for(var e=o+1;e<this.t;++e)i[e-o-1]|=(this[e]&h)<<s,i[e-o]=this[e]>>r;r>0&&(i[this.t-o-1]|=(this.s&h)<<s),i.t=this.t-o,i.clamp()}},o.prototype.subTo=function(t,i){for(var o=0,r=0,s=Math.min(t.t,this.t);o<s;)r+=this[o]-t[o],i[o++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r-=t.s;o<this.t;)r+=this[o],i[o++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;o<t.t;)r-=t[o],i[o++]=r&this.DM,r>>=this.DB;r-=t.s}i.s=r<0?-1:0,r<-1?i[o++]=this.DV+r:r>0&&(i[o++]=r),i.t=o,i.clamp()},o.prototype.multiplyTo=function(t,i){var r=this.abs(),s=t.abs(),h=r.t;for(i.t=h+s.t;--h>=0;)i[h]=0;for(h=0;h<s.t;++h)i[h+r.t]=r.am(0,s[h],i,h,0,r.t);i.s=0,i.clamp(),this.s!=t.s&&o.ZERO.subTo(i,i)},o.prototype.squareTo=function(t){for(var i=this.abs(),o=t.t=2*i.t;--o>=0;)t[o]=0;for(o=0;o<i.t-1;++o){var r=i.am(o,i[o],t,2*o,0,1);(t[o+i.t]+=i.am(o+1,2*i[o],t,2*o+1,r,i.t-o-1))>=i.DV&&(t[o+i.t]-=i.DV,t[o+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(o,i[o],t,2*o,0,1)),t.s=0,t.clamp()},o.prototype.divRemTo=function(t,i,s){var h=t.abs();if(!(h.t<=0)){var e=this.abs();if(e.t<h.t)return null!=i&&i.fromInt(0),void(null!=s&&this.copyTo(s));null==s&&(s=r());var n=r(),f=this.s,u=t.s,p=this.DB-a(h[h.t-1]);p>0?(h.lShiftTo(p,n),e.lShiftTo(p,s)):(h.copyTo(n),e.copyTo(s));var c=n.t,m=n[c-1];if(0!=m){var l=m*(1<<this.F1)+(c>1?n[c-2]>>this.F2:0),v=this.FV/l,T=(1<<this.F1)/l,y=1<<this.F2,d=s.t,D=d-c,b=null==i?r():i;for(n.dlShiftTo(D,b),s.compareTo(b)>=0&&(s[s.t++]=1,s.subTo(b,s)),o.ONE.dlShiftTo(c,b),b.subTo(n,n);n.t<c;)n[n.t++]=0;for(;--D>=0;){var g=s[--d]==m?this.DM:Math.floor(s[d]*v+(s[d-1]+y)*T);if((s[d]+=n.am(0,g,s,D,0,c))<g)for(n.dlShiftTo(D,b),s.subTo(b,s);s[d]<--g;)s.subTo(b,s)}null!=i&&(s.drShiftTo(c,i),f!=u&&o.ZERO.subTo(i,i)),s.t=c,s.clamp(),p>0&&s.rShiftTo(p,s),f<0&&o.ZERO.subTo(s,s)}}},o.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return(i=(i=(i=(i=i*(2-(15&t)*i)&15)*(2-(255&t)*i)&255)*(2-((65535&t)*i&65535))&65535)*(2-t*i%this.DV)%this.DV)>0?this.DV-i:-i},o.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},o.prototype.exp=function(t,i){if(t>4294967295||t<1)return o.ONE;var s=r(),h=r(),e=i.convert(this),n=a(t)-1;for(e.copyTo(s);--n>=0;)if(i.sqrTo(s,h),(t&1<<n)>0)i.mulTo(h,e,s);else{var f=s;s=h,h=f}return i.revert(s)},o.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var o,r=(1<<i)-1,s=!1,h="",e=this.t,n=this.DB-e*this.DB%i;if(e-- >0)for(n<this.DB&&(o=this[e]>>n)>0&&(s=!0,h=f(o));e>=0;)n<i?(o=(this[e]&(1<<n)-1)<<i-n,o|=this[--e]>>(n+=this.DB-i)):(o=this[e]>>(n-=i)&r,n<=0&&(n+=this.DB,--e)),o>0&&(s=!0),s&&(h+=f(o));return s?h:"0"},o.prototype.negate=function(){var t=r();return o.ZERO.subTo(this,t),t},o.prototype.abs=function(){return this.s<0?this.negate():this},o.prototype.compareTo=function(t){var i=this.s-t.s;if(0!=i)return i;var o=this.t;if(0!=(i=o-t.t))return this.s<0?-i:i;for(;--o>=0;)if(0!=(i=this[o]-t[o]))return i;return 0},o.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+a(this[this.t-1]^this.s&this.DM)},o.prototype.mod=function(t){var i=r();return this.abs().divRemTo(t,null,i),this.s<0&&i.compareTo(o.ZERO)>0&&t.subTo(i,i),i},o.prototype.modPowInt=function(t,i){var o;return o=t<256||i.isEven()?new c(i):new m(i),this.exp(t,o)},o.ZERO=p(0),o.ONE=p(1),b.prototype.convert=g,b.prototype.revert=g,b.prototype.mulTo=function(t,i,o){t.multiplyTo(i,o)},b.prototype.sqrTo=function(t,i){t.squareTo(i)},S.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=r();return t.copyTo(i),this.reduce(i),i},S.prototype.revert=function(t){return t},S.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},S.prototype.mulTo=function(t,i,o){t.multiplyTo(i,o),this.reduce(o)},S.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)};var B,w,M,E=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],R=(1<<26)/E[E.length-1];function O(){var t;t=(new Date).getTime(),w[M++]^=255&t,w[M++]^=t>>8&255,w[M++]^=t>>16&255,w[M++]^=t>>24&255,M>=I&&(M-=I)}if(o.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},o.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var i=this.chunkSize(t),o=Math.pow(t,i),s=p(o),h=r(),e=r(),n="";for(this.divRemTo(s,h,e);h.signum()>0;)n=(o+e.intValue()).toString(t).substr(1)+n,h.divRemTo(s,h,e);return e.intValue().toString(t)+n},o.prototype.fromRadix=function(t,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),s=Math.pow(i,r),h=!1,e=0,n=0,f=0;f<t.length;++f){var p=u(t,f);p<0?"-"==t.charAt(f)&&0==this.signum()&&(h=!0):(n=i*n+p,++e>=r&&(this.dMultiply(s),this.dAddOffset(n,0),e=0,n=0))}e>0&&(this.dMultiply(Math.pow(i,e)),this.dAddOffset(n,0)),h&&o.ZERO.subTo(this,this)},o.prototype.fromNumber=function(t,i,r){if("number"==typeof i)if(t<2)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(o.ONE.shiftLeft(t-1),v,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(o.ONE.shiftLeft(t-1),this);else{var s=new Array,h=7&t;s.length=1+(t>>3),i.nextBytes(s),h>0?s[0]&=(1<<h)-1:s[0]=0,this.fromString(s,256)}},o.prototype.bitwiseTo=function(t,i,o){var r,s,h=Math.min(t.t,this.t);for(r=0;r<h;++r)o[r]=i(this[r],t[r]);if(t.t<this.t){for(s=t.s&this.DM,r=h;r<this.t;++r)o[r]=i(this[r],s);o.t=this.t}else{for(s=this.s&this.DM,r=h;r<t.t;++r)o[r]=i(s,t[r]);o.t=t.t}o.s=i(this.s,t.s),o.clamp()},o.prototype.changeBit=function(t,i){var r=o.ONE.shiftLeft(t);return this.bitwiseTo(r,i,r),r},o.prototype.addTo=function(t,i){for(var o=0,r=0,s=Math.min(t.t,this.t);o<s;)r+=this[o]+t[o],i[o++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r+=t.s;o<this.t;)r+=this[o],i[o++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;o<t.t;)r+=t[o],i[o++]=r&this.DM,r>>=this.DB;r+=t.s}i.s=r<0?-1:0,r>0?i[o++]=r:r<-1&&(i[o++]=this.DV+r),i.t=o,i.clamp()},o.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},o.prototype.dAddOffset=function(t,i){if(0!=t){for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this.DV;)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]}},o.prototype.multiplyLowerTo=function(t,i,o){var r,s=Math.min(this.t+t.t,i);for(o.s=0,o.t=s;s>0;)o[--s]=0;for(r=o.t-this.t;s<r;++s)o[s+this.t]=this.am(0,t[s],o,s,0,this.t);for(r=Math.min(t.t,i);s<r;++s)this.am(0,t[s],o,s,0,i-s);o.clamp()},o.prototype.multiplyUpperTo=function(t,i,o){--i;var r=o.t=this.t+t.t-i;for(o.s=0;--r>=0;)o[r]=0;for(r=Math.max(i-this.t,0);r<t.t;++r)o[this.t+r-i]=this.am(i-r,t[r],o,0,0,this.t+r-i);o.clamp(),o.drShiftTo(1,o)},o.prototype.modInt=function(t){if(t<=0)return 0;var i=this.DV%t,o=this.s<0?t-1:0;if(this.t>0)if(0==i)o=this[0]%t;else for(var r=this.t-1;r>=0;--r)o=(i*o+this[r])%t;return o},o.prototype.millerRabin=function(t){var i=this.subtract(o.ONE),s=i.getLowestSetBit();if(s<=0)return!1;var h=i.shiftRight(s);(t=t+1>>1)>E.length&&(t=E.length);for(var e=r(),n=0;n<t;++n){e.fromInt(E[Math.floor(Math.random()*E.length)]);var f=e.modPow(h,this);if(0!=f.compareTo(o.ONE)&&0!=f.compareTo(i)){for(var u=1;u++<s&&0!=f.compareTo(i);)if(0==(f=f.modPowInt(2,this)).compareTo(o.ONE))return!1;if(0!=f.compareTo(i))return!1}}return!0},o.prototype.clone=function(){var t=r();return this.copyTo(t),t},o.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},o.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},o.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},o.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},o.prototype.toByteArray=function(){var t=this.t,i=new Array;i[0]=this.s;var o,r=this.DB-t*this.DB%8,s=0;if(t-- >0)for(r<this.DB&&(o=this[t]>>r)!=(this.s&this.DM)>>r&&(i[s++]=o|this.s<<this.DB-r);t>=0;)r<8?(o=(this[t]&(1<<r)-1)<<8-r,o|=this[--t]>>(r+=this.DB-8)):(o=this[t]>>(r-=8)&255,r<=0&&(r+=this.DB,--t)),0!=(128&o)&&(o|=-256),0==s&&(128&this.s)!=(128&o)&&++s,(s>0||o!=this.s)&&(i[s++]=o);return i},o.prototype.equals=function(t){return 0==this.compareTo(t)},o.prototype.min=function(t){return this.compareTo(t)<0?this:t},o.prototype.max=function(t){return this.compareTo(t)>0?this:t},o.prototype.and=function(t){var i=r();return this.bitwiseTo(t,l,i),i},o.prototype.or=function(t){var i=r();return this.bitwiseTo(t,v,i),i},o.prototype.xor=function(t){var i=r();return this.bitwiseTo(t,T,i),i},o.prototype.andNot=function(t){var i=r();return this.bitwiseTo(t,y,i),i},o.prototype.not=function(){for(var t=r(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t},o.prototype.shiftLeft=function(t){var i=r();return t<0?this.rShiftTo(-t,i):this.lShiftTo(t,i),i},o.prototype.shiftRight=function(t){var i=r();return t<0?this.lShiftTo(-t,i):this.rShiftTo(t,i),i},o.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+d(this[t]);return this.s<0?this.t*this.DB:-1},o.prototype.bitCount=function(){for(var t=0,i=this.s&this.DM,o=0;o<this.t;++o)t+=D(this[o]^i);return t},o.prototype.testBit=function(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)},o.prototype.setBit=function(t){return this.changeBit(t,v)},o.prototype.clearBit=function(t){return this.changeBit(t,y)},o.prototype.flipBit=function(t){return this.changeBit(t,T)},o.prototype.add=function(t){var i=r();return this.addTo(t,i),i},o.prototype.subtract=function(t){var i=r();return this.subTo(t,i),i},o.prototype.multiply=function(t){var i=r();return this.multiplyTo(t,i),i},o.prototype.divide=function(t){var i=r();return this.divRemTo(t,i,null),i},o.prototype.remainder=function(t){var i=r();return this.divRemTo(t,null,i),i},o.prototype.divideAndRemainder=function(t){var i=r(),o=r();return this.divRemTo(t,i,o),new Array(i,o)},o.prototype.modPow=function(t,i){var o,s,h=t.bitLength(),e=p(1);if(h<=0)return e;o=h<18?1:h<48?3:h<144?4:h<768?5:6,s=h<8?new c(i):i.isEven()?new S(i):new m(i);var n=new Array,f=3,u=o-1,l=(1<<o)-1;if(n[1]=s.convert(this),o>1){var v=r();for(s.sqrTo(n[1],v);f<=l;)n[f]=r(),s.mulTo(v,n[f-2],n[f]),f+=2}var T,y,d=t.t-1,D=!0,b=r();for(h=a(t[d])-1;d>=0;){for(h>=u?T=t[d]>>h-u&l:(T=(t[d]&(1<<h+1)-1)<<u-h,d>0&&(T|=t[d-1]>>this.DB+h-u)),f=o;0==(1&T);)T>>=1,--f;if((h-=f)<0&&(h+=this.DB,--d),D)n[T].copyTo(e),D=!1;else{for(;f>1;)s.sqrTo(e,b),s.sqrTo(b,e),f-=2;f>0?s.sqrTo(e,b):(y=e,e=b,b=y),s.mulTo(b,n[T],e)}for(;d>=0&&0==(t[d]&1<<h);)s.sqrTo(e,b),y=e,e=b,b=y,--h<0&&(h=this.DB-1,--d)}return s.revert(e)},o.prototype.modInverse=function(t){var i=t.isEven();if(this.isEven()&&i||0==t.signum())return o.ZERO;for(var r=t.clone(),s=this.clone(),h=p(1),e=p(0),n=p(0),f=p(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(h.isEven()&&e.isEven()||(h.addTo(this,h),e.subTo(t,e)),h.rShiftTo(1,h)):e.isEven()||e.subTo(t,e),e.rShiftTo(1,e);for(;s.isEven();)s.rShiftTo(1,s),i?(n.isEven()&&f.isEven()||(n.addTo(this,n),f.subTo(t,f)),n.rShiftTo(1,n)):f.isEven()||f.subTo(t,f),f.rShiftTo(1,f);r.compareTo(s)>=0?(r.subTo(s,r),i&&h.subTo(n,h),e.subTo(f,e)):(s.subTo(r,s),i&&n.subTo(h,n),f.subTo(e,f))}return 0!=s.compareTo(o.ONE)?o.ZERO:f.compareTo(t)>=0?f.subtract(t):f.signum()<0?(f.addTo(t,f),f.signum()<0?f.add(t):f):f},o.prototype.pow=function(t){return this.exp(t,new b)},o.prototype.gcd=function(t){var i=this.s<0?this.negate():this.clone(),o=t.s<0?t.negate():t.clone();if(i.compareTo(o)<0){var r=i;i=o,o=r}var s=i.getLowestSetBit(),h=o.getLowestSetBit();if(h<0)return i;for(s<h&&(h=s),h>0&&(i.rShiftTo(h,i),o.rShiftTo(h,o));i.signum()>0;)(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),(s=o.getLowestSetBit())>0&&o.rShiftTo(s,o),i.compareTo(o)>=0?(i.subTo(o,i),i.rShiftTo(1,i)):(o.subTo(i,o),o.rShiftTo(1,o));return h>0&&o.lShiftTo(h,o),o},o.prototype.isProbablePrime=function(t){var i,o=this.abs();if(1==o.t&&o[0]<=E[E.length-1]){for(i=0;i<E.length;++i)if(o[0]==E[i])return!0;return!1}if(o.isEven())return!1;for(i=1;i<E.length;){for(var r=E[i],s=i+1;s<E.length&&r<R;)r*=E[s++];for(r=o.modInt(r);i<s;)if(r%E[i++]==0)return!1}return o.millerRabin(t)},o.prototype.square=function(){var t=r();return this.squareTo(t),t},o.prototype.Barrett=S,null==w){var A;if(w=new Array,M=0,"undefined"!=typeof window&&window.crypto)if(window.crypto.getRandomValues){var V=new Uint8Array(32);for(window.crypto.getRandomValues(V),A=0;A<32;++A)w[M++]=V[A]}else if("Netscape"==navigator.appName&&navigator.appVersion<"5"){var q=window.crypto.random(32);for(A=0;A<q.length;++A)w[M++]=255&q.charCodeAt(A)}for(;M<I;)A=Math.floor(65536*Math.random()),w[M++]=A>>>8,w[M++]=255&A;M=0,O()}function N(){if(null==B){for(O(),(B=new L).init(w),M=0;M<w.length;++M)w[M]=0;M=0}return B.next()}function x(){}function L(){this.i=0,this.j=0,this.S=new Array}x.prototype.nextBytes=function(t){var i;for(i=0;i<t.length;++i)t[i]=N()},L.prototype.init=function(t){var i,o,r;for(i=0;i<256;++i)this.S[i]=i;for(o=0,i=0;i<256;++i)o=o+this.S[i]+t[i%t.length]&255,r=this.S[i],this.S[i]=this.S[o],this.S[o]=r;this.i=0,this.j=0},L.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var I=256;t.exports={default:o,BigInteger:o,SecureRandom:x}}).call(this)}}]);