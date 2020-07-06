define(["exports","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-ec27f304"],function(a,R,W,h){"use strict";var r={},x=new W.Cartesian3,M=new W.Cartesian3,f=new h.Quaternion,z=new h.Matrix3;function S(a,r,e,t,i,n,s,o,l,C){var y=a+r;W.Cartesian3.multiplyByScalar(t,Math.cos(y),x),W.Cartesian3.multiplyByScalar(e,Math.sin(y),M),W.Cartesian3.add(x,M,x);var u=Math.cos(a);u*=u;var c=Math.sin(a);c*=c;var m=n/Math.sqrt(s*u+i*c)/o;return h.Quaternion.fromAxisAngle(x,m,f),h.Matrix3.fromQuaternion(f,z),h.Matrix3.multiplyByVector(z,l,C),W.Cartesian3.normalize(C,C),W.Cartesian3.multiplyByScalar(C,o,C),C}var B=new W.Cartesian3,b=new W.Cartesian3,Q=new W.Cartesian3,d=new W.Cartesian3;r.raisePositionsToHeight=function(a,r,e){for(var t=r.ellipsoid,i=r.height,n=r.extrudedHeight,s=e?a.length/3*2:a.length/3,o=new Float64Array(3*s),l=a.length,C=e?l:0,y=0;y<l;y+=3){var u=y+1,c=y+2,m=W.Cartesian3.fromArray(a,y,B);t.scaleToGeodeticSurface(m,m);var h=W.Cartesian3.clone(m,b),x=t.geodeticSurfaceNormal(m,d),M=W.Cartesian3.multiplyByScalar(x,i,Q);W.Cartesian3.add(m,M,m),e&&(W.Cartesian3.multiplyByScalar(x,n,M),W.Cartesian3.add(h,M,h),o[y+C]=h.x,o[u+C]=h.y,o[c+C]=h.z),o[y]=m.x,o[u]=m.y,o[c]=m.z}return o};var G=new W.Cartesian3,H=new W.Cartesian3,N=new W.Cartesian3;r.computeEllipsePositions=function(a,r,e){var t=a.semiMinorAxis,i=a.semiMajorAxis,n=a.rotation,s=a.center,o=8*a.granularity,l=t*t,C=i*i,y=i*t,u=W.Cartesian3.magnitude(s),c=W.Cartesian3.normalize(s,G),m=W.Cartesian3.cross(W.Cartesian3.UNIT_Z,s,H),m=W.Cartesian3.normalize(m,m),h=W.Cartesian3.cross(c,m,N),x=1+Math.ceil(R.CesiumMath.PI_OVER_TWO/o),M=R.CesiumMath.PI_OVER_TWO/(x-1),f=R.CesiumMath.PI_OVER_TWO-x*M;f<0&&(x-=Math.ceil(Math.abs(f)/M));var z,d,_,O,v,p=r?new Array(3*(x*(x+2)*2)):void 0,w=0,P=B,T=b,I=4*x*3,g=I-1,E=0,V=e?new Array(I):void 0,P=S(f=R.CesiumMath.PI_OVER_TWO,n,h,m,l,y,C,u,c,P);for(r&&(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z),e&&(V[g--]=P.z,V[g--]=P.y,V[g--]=P.x),f=R.CesiumMath.PI_OVER_TWO-M,z=1;z<x+1;++z){if(P=S(f,n,h,m,l,y,C,u,c,P),T=S(Math.PI-f,n,h,m,l,y,C,u,c,T),r){for(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,_=2*z+2,d=1;d<_-1;++d)O=d/(_-1),v=W.Cartesian3.lerp(P,T,O,Q),p[w++]=v.x,p[w++]=v.y,p[w++]=v.z;p[w++]=T.x,p[w++]=T.y,p[w++]=T.z}e&&(V[g--]=P.z,V[g--]=P.y,V[g--]=P.x,V[E++]=T.x,V[E++]=T.y,V[E++]=T.z),f=R.CesiumMath.PI_OVER_TWO-(z+1)*M}for(z=x;1<z;--z){if(P=S(-(f=R.CesiumMath.PI_OVER_TWO-(z-1)*M),n,h,m,l,y,C,u,c,P),T=S(f+Math.PI,n,h,m,l,y,C,u,c,T),r){for(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,_=2*(z-1)+2,d=1;d<_-1;++d)O=d/(_-1),v=W.Cartesian3.lerp(P,T,O,Q),p[w++]=v.x,p[w++]=v.y,p[w++]=v.z;p[w++]=T.x,p[w++]=T.y,p[w++]=T.z}e&&(V[g--]=P.z,V[g--]=P.y,V[g--]=P.x,V[E++]=T.x,V[E++]=T.y,V[E++]=T.z)}P=S(-(f=R.CesiumMath.PI_OVER_TWO),n,h,m,l,y,C,u,c,P);var A={};return r&&(p[w++]=P.x,p[w++]=P.y,p[w++]=P.z,A.positions=p,A.numPts=x),e&&(V[g--]=P.z,V[g--]=P.y,V[g--]=P.x,A.outerPositions=V),A},a.EllipseGeometryLibrary=r});