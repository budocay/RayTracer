function	inter_sphere(core, pos_tab, rot_tab)
{
    var k;
    var a;
    var b;
    var c;
    var delta;
    var p_inter;

    translate_and_rotate(core, pos_tab, rot_tab);
    a = (Math.pow(core.vis.x, 2)) + (Math.pow(core.vis.y, 2)) +
	(Math.pow(core.vis.z, 2));
    b = 2 * ((core.eye.x * core.vis.x) + (core.eye.y * core.vis.y) +
	     (core.eye.z * core.vis.z));
    c = ((Math.pow(core.eye.x, 2)) + (Math.pow(core.eye.y, 2)) +
	 (Math.pow(core.eye.z, 2))) - (Math.pow(pos_tab[4], 2));
    delta = (b * b) - (4 * a * c);
    k = k_valor(delta, a, b);
    p_inter = intersection(core, k);
    back_translate_and_rotate(core, pos_tab, rot_tab);
    if (p_inter.y > rot_tab[3] && rot_tab[3] != null)
	return (0);
    return (k);
}

function	inter_plan(core, pos_tab, rot_tab)
{
    var k;

    translate_and_rotate(core, pos_tab, rot_tab);
    if (core.vis.z === 0)
	return (0);
    else
    {
	k = (-1 * (core.eye.z / core.vis.z));
	back_translate_and_rotate(core, pos_tab, rot_tab);
	if (k < 0 || k === null || k === undefined)
	    return (0);
	else
	    return (k);
    }
}

function	inter_cyl(core, pos_tab, rot_tab)
{
    var a;
    var b;
    var c;
    var k;
    var delta;
    var p_inter;

    translate_and_rotate(core, pos_tab, rot_tab);
    a = (Math.pow(core.vis.x, 2)) + (Math.pow(core.vis.y, 2));
    b = 2 * ((core.eye.x * core.vis.x) + (core.eye.y * core.vis.y));
    c = ((Math.pow(core.eye.x, 2)) + (Math.pow(core.eye.y, 2))) -
	(Math.pow(pos_tab[4], 2));
    delta = (b * b) - (4 * a * c);
    k = k_valor(delta, a, b);
    p_inter = intersection(core, k);
    back_translate_and_rotate(core, pos_tab, rot_tab);
    if (p_inter.z > rot_tab[3] && rot_tab[3] != null || p_inter.z <
	rot_tab[4] && rot_tab[4] != null)
	return (0);
    return (k);
}

function	inter_cone(core, pos_tab, rot_tab)
{
    var	a;
    var	b;
    var	c;
    var	delta;
    var angle;
    var k;
    var p_inter;

    translate_and_rotate(core, pos_tab, rot_tab);
    pos_tab[4] = 180 - pos_tab[4];
    angle = pos_tab[4]/180 * Math.PI;
    a = Math.pow(core.vis.x, 2) + Math.pow(core.vis.y, 2) -
	Math.pow(core.vis.z, 2) / Math.pow(angle, 2);
    b = (2 * (core.eye.x * core.vis.x)) + (2 * (core.eye.y * core.vis.y)) -
	(2 * (core.eye.z * core.vis.z)) / Math.pow(angle, 2);
    c = Math.pow(core.eye.x, 2) + Math.pow(core.eye.y, 2) -
	Math.pow(core.eye.z, 2) / Math.pow(angle, 2);
    delta = Math.pow(b, 2) - (4 * (a * c));
    k = k_valor(delta, a, b);
    p_inter = intersection(core, k);
    back_translate_and_rotate(core, pos_tab, rot_tab);
    if (p_inter.z > rot_tab[3] && rot_tab[3] != null || p_inter.z <
	rot_tab[4] && rot_tab[4] != null)
	return (0);
    return (k);
}

function	inter_ellypse(core, pos_tab, rot_tab)
{
    var	a;
    var	b;
    var	c;
    var	delta;
    var t;
    var origin_center = [];

    translate_and_rotate(core, pos_tab, rot_tab);
    origin_center[0] = core.eye.x - pos_tab[0];
    origin_center[1] = core.eye.y - pos_tab[1];
    origin_center[2] = core.eye.z - pos_tab[2];
    a = (((Math.pow(core.vis.x, 2)) / (Math.pow(pos_tab[4], 2))) +
	 (((Math.pow(core.vis.y, 2)) / (Math.pow(pos_tab[4] * 2, 2)))) +
	 ((Math.pow(core.vis.z, 2)) / (Math.pow(pos_tab[4] * 4, 2))));
    b = (((2 * origin_center[0] * core.vis.x) / (Math.pow(pos_tab[4], 2))) +
	 (((2 * origin_center[1] * core.vis.y) / (Math.pow(pos_tab[4] * 2, 2))))
	 + (((2 * origin_center[2] * core.vis.z) /
	     (Math.pow(pos_tab[4] * 4, 2)))));
    c = (((Math.pow(origin_center[0], 2)) / (Math.pow(pos_tab[4], 2))) +
	 ((Math.pow(origin_center[1], 2)) / (Math.pow(pos_tab[4] * 2, 2))) +
	 ((Math.pow(origin_center[2], 2)) / (Math.pow(pos_tab[4] * 4, 2))) - 1);
    delta = Math.sqrt(Math.pow(b, 2) - (4 *(a * c)));
    t = find_little((-b + delta) / (2 * a), (-b - delta) / (2 * a));
    back_translate_and_rotate(core, pos_tab, rot_tab);
    return (t);
}
