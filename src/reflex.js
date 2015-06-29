function reflex2(object, tab, col, obj)
{
    col[0] = (col[0] + (tab[obj].colorA * object.refl)) / (1 + object.refl);
    col[1] = (col[1] + (tab[obj].colorB * object.refl)) / (1 + object.refl);
    col[2] = (col[2] + (tab[obj].colorC * object.refl)) / (1 + object.refl);
    col[3] = 255;
    return (col);
}

function reflex(object, core, normal_obj, col)
{
    var save;
    var pos_tab = [];
    var rot_tab = [];
    var tab;
    var cl;
    var obj;

    pos_tab = [object.pX, object.pY, object.pZ];
    rot_tab = [object.rot_x, object.rot_y, object.rot_z];
    px = core.eye.x + (object.k * core.vis.x);
    py = core.eye.y + (object.k * core.vis.y);
    pz = core.eye.z + (object.k * core.vis.z);
    save = glob2;
    cl = -(1/2 * (core.vis.x * normal_obj.x + core.vis.y * normal_obj.y +
		  core.vis.z * normal_obj.z));
    save.eye = pos(px, py, pz);
    save.vis = pos(core.vis.x + (2 * normal_obj.x * cl), core.vis.y
		   + (2 * normal_obj.y * cl), core.vis.z +
		   (2 * normal_obj.z * cl));
    tab = choose_object(save, col[0], 1);
    obj = choose_color3(obj, tab);
    if (tab[obj] != null)
	col[0] = reflex2(object, tab, col[0], obj);
    return (col[0]);
}
