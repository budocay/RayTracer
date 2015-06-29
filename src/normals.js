function normal_for_cyl(core, object, lights)
{
    var pp;
    var normal_obj;

    pp = light_vector(core, object, 1, lights);
    rotate_x(pp, object.rot_x);
    rotate_y(pp, object.rot_y);
    rotate_z(pp, object.rot_z);
    normal_obj = pos(pp.x - object.pZ, pp.y - object.pY, 0 - (object.pX));
    return (normal_obj);
}

function normal_for_cone(core, object, lights)
{
    var pp;
    var normal_obj;

    pp = light_vector(core, object, 1, lights);
    normal_obj = pos(pp.x - object.pZ, pp.y - object.pY, 10 *
		     (pp.z - object.pX));
    return (normal_obj);
}

function normal_for_sphere(core, object, lights)
{
    var pp;
    var normal_obj;

    pp = light_vector(core, object, 1, lights);
    normal_obj = pos(pp.x - object.pZ, pp.y - object.pY, pp.z - object.pX);
    return (normal_obj);
}

function normal_for_ellypse(core, object, lights)
{
    var pp;
    var normal_obj;

    pp = light_vector(core, object, 1, lights);
    normal_obj = pos(pp.x - object.pZ, pp.y - object.pY, pp.z - object.pX);
    return (normal_obj);
}

function normal_for_plan(core, object)
{
    var pp;
    var normal_obj;

    pp = pos(0, 1, 0);
    normal_obj = pos(pp.x - object.pZ, pp.y - object.pY, pp.z - object.pX);
    return (normal_obj);
}
