function	sphere(core, color_tab, pos_tab, rotate_tab)
{
    var spher =
	{
	    k: inter_sphere(core, pos_tab, rotate_tab),
	    colorA: color_tab[0],
	    colorB: color_tab[1],
	    colorC: color_tab[2],
	    trans: color_tab[3],
	    refl: color_tab[4],
	    bri: color_tab[5],
	    pX: pos_tab[0],
	    pY: pos_tab[1],
	    pZ: pos_tab[2],
	    rot_x: rotate_tab[0],
	    rot_y: rotate_tab[1],
	    rot_z: rotate_tab[2],
	    nb: pos_tab[3],
	    typ: 1,
	    limit: rotate_tab[3]
	};
    return (spher);
}

function	cone(core, color_tab, pos_tab, rotate_tab)
{
    var con =
	{
	    k: inter_cone(core, pos_tab, rotate_tab),
	    colorA: color_tab[0],
	    colorB: color_tab[1],
	    colorC: color_tab[2],
	    trans: color_tab[3],
	    refl: color_tab[4],
	    bri: color_tab[5],
	    pX: pos_tab[0],
	    pY: pos_tab[1],
	    pZ: pos_tab[2],
	    rot_x: rotate_tab[0],
	    rot_y: rotate_tab[1],
	    rot_z: rotate_tab[2],
	    nb: pos_tab[3],
	    typ: 2,
	    limit_h: rotate_tab[3],
	    limit_l: rotate_tab[4]
	};
    return (con);
}

function	ellyps(core, color_tab, pos_tab, rotate_tab)
{
    var ellypse =
	{
	    k: inter_ellypse(core, pos_tab, rotate_tab),
	    colorA: color_tab[0],
	    colorB: color_tab[1],
	    colorC: color_tab[2],
	    trans: color_tab[3],
	    refl: color_tab[4],
	    bri: color_tab[5],
	    pX: pos_tab[0],
	    pY: pos_tab[1],
	    pZ: pos_tab[2],
	    rot_x: rotate_tab[0],
	    rot_y: rotate_tab[1],
	    rot_z: rotate_tab[2],
	    nb: pos_tab[3],
	    typ: 4,
	    limit: rotate_tab[3]
	};
    return (ellypse);
}

function	plan(core, color_tab, pos_tab, rotate_tab)
{
    var plane =
	{
	    k: inter_plan(core, pos_tab, rotate_tab),
	    colorA: color_tab[0],
	    colorB: color_tab[1],
	    colorC: color_tab[2],
	    trans: color_tab[3],
	    refl: color_tab[4],
	    bri: color_tab[5],
	    pX: pos_tab[0],
	    pY: pos_tab[1],
	    pZ: pos_tab[2],
	    rot_x: rotate_tab[0],
	    rot_y: rotate_tab[1],
	    rot_z: rotate_tab[2],
	    nb: pos_tab[3],
	    typ: 3,
	    limit: rotate_tab[3]
	};
    return (plane);
}

function	cylindre(core, color_tab, pos_tab, rotate_tab)
{
    var cyl =
	{
	    k: inter_cyl(core, pos_tab, rotate_tab),
	    colorA: color_tab[0],
	    colorB: color_tab[1],
	    colorC: color_tab[2],
	    trans: color_tab[3],
	    refl: color_tab[4],
	    bri: color_tab[5],
	    pX: pos_tab[0],
	    pY: pos_tab[1],
	    pZ: pos_tab[2],
	    rot_x: rotate_tab[0],
	    rot_y: rotate_tab[1],
	    rot_z: rotate_tab[2],
	    nb: pos_tab[3],
	    typ: 5,
	    limit_h: rotate_tab[3],
	    limit_l: rotate_tab[4]
	};
    return (cyl);
}
