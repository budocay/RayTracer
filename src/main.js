var g_x_window = 1000;
var g_y_window = 950;

function	main()
{
    var core;
    var lights;

    core = global();
    lights = light();
    mlj_init("RayTracer");
    core.win = mlj_new_window(g_x_window, g_y_window, "black");
    core.img = mlj_new_image(core.win, g_x_window, g_y_window);
    mlj_put_image_to_window(core.win, core.img, 0, 0);
    aff_screen(core, lights);
}

function	aff_screen(core, lights)
{
    var x;
    var y;
    var color = [];

    x = 0;
    y = 0;
    while (core.y <= g_y_window)
    {
	core.x = 0;
	while (core.x <= g_x_window)
	{
	    calc_vectors(core);
	    color = choose_object(core, lights, 0);
	    my_put_pixel_to_img(core, color);
	    core.x++;
	}
	core.y++;
    }
    mlj_put_image_to_window(core.win, core.img, 0, 0);
}

function	calc_vectors(core)
{
    var fovx;
    var foy;

    fovx = Math.PI / 16;
    fovy = (g_y_window / g_x_window) * fovx;
    core.vis.x = ((2*core.x - g_x_window) / g_x_window) * Math.tan(fovx);
    core.vis.y = ((2*(g_y_window - core.y) - g_y_window)
                  / g_y_window) * Math.tan(fovy);
    core.vis.z = 1;
}

function	my_put_pixel_to_img(core, color)
{
    var pxl;

    pxl = ((core.y * g_x_window * 4) + (core.x * 4));
    core.img.data[pxl++] = color[0];
    core.img.data[pxl++] = color[1];
    core.img.data[pxl++] = color[2];
    core.img.data[pxl++] = color[3];
    return (core.img);
}

function intersection(core, k)
{
    var px;
    var py;
    var pz;
    var p_inter;

    px = core.eye.x + (k * core.vis.x);
    py = core.eye.y + (k * core.vis.y);
    pz = core.eye.z + (k * core.vis.z);
    p_inter = pos(px, py, pz);
    return (p_inter);
}
