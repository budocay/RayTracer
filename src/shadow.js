function	shadow(object, core, light, color)
{
    var save;
    var pos_tab = [];
    var rot_tab = [];
    var tab;
    var a;
    var cmp;
    var obj;

    pos_tab = [object.pX, object.pY, object.pZ];
    rot_tab = [object.rot_x, object.rot_y, object.rot_z];
    px = core.eye.x + (object.k * core.vis.x);
    py = core.eye.y + (object.k * core.vis.y);
    pz = core.eye.z + (object.k * core.vis.z);
    save = glob2;
    save.eye = pos(light.x, light.y, light.z);
    save.vis = pos(px - light.x, (py - light.y), (pz - light.z));
    tab = choose_object(save, light, 1);
    obj = choose_color3(obj, tab);
    if (tab[obj] != null && tab[obj].nb != object.nb)
    {
	color[0] -= 150 - ((100 - tab[obj].trans) * (tab[obj].colorA / 255));
	color[1] -= 150 - ((100 - tab[obj].trans) * (tab[obj].colorB / 255));
	color[2] -= 150 - ((100 - tab[obj].trans) * (tab[obj].colorC / 255));
	color[3] = 255;
    }
    return (color);
}
