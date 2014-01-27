#version 130
//WARNING!!!!! DO NOT MOVE the #version line in this shader file (it is modified by PMXViewer!)
//This shader is designed to work with OpenGL 3.0 (GLSL 1.30) or later
//However, on OSX machines only OpenGL 2.1 (GLSL 1.20) and OpenGL 3.2+ (GLSL 1.50+) are supported (OpenGL 3.0, 3.1 (GLSL 1.30, 1.40)  are missing)
//Thus we bump up the GLSL shader version requirement to 1.50 on newer machines so that the shader will work with OSX machines.


in vec4 fColor;

out vec4 color;

void main()
{
	color=vec4(1,0,0,1);
	color=fColor;
}
