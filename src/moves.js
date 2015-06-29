function	translate_and_rotate(core, pos_tab, rot_tab)
{
    core.eye.z -= pos_tab[0];
    core.eye.y -= pos_tab[1];
    core.eye.x -= pos_tab[2];
    rotate_x(core.eye, rot_tab[0]);
    rotate_y(core.eye, rot_tab[1]);
    rotate_z(core.eye, rot_tab[2]);
    rotate_x(core.vis, rot_tab[0]);
    rotate_y(core.vis, rot_tab[1]);
    rotate_z(core.vis, rot_tab[2]);
}

function	back_translate_and_rotate(core, pos_tab, rot_tab)
{
    rotate_z(core.eye, -rot_tab[2]);
    rotate_y(core.eye, -rot_tab[1]);
    rotate_x(core.eye, -rot_tab[0]);
    rotate_z(core.vis, -rot_tab[2]);
    rotate_y(core.vis, -rot_tab[1]);
    rotate_x(core.vis, -rot_tab[0]);
    core.eye.z += pos_tab[0];
    core.eye.y += pos_tab[1];
    core.eye.x += pos_tab[2];
}

function	rotate_x(vect, rot)
{
    var	tmp;
    var	angle;

    angle = (rot * Math.PI) / 180;
    tmp = vect.y * Math.cos(angle) - vect.z * Math.sin(angle);
    vect.z = vect.y * Math.sin(angle) + vect.z * Math.cos(angle);
    vect.y = tmp;
}

function	rotate_y(vect, rot)
{
    var	tmp;
    var	angle;

    angle = (rot * Math.PI) / 180;
    tmp = vect.x * Math.cos(angle) - vect.z * Math.sin(angle);
    vect.z = vect.x * Math.sin(angle) + vect.z * Math.cos(angle);
    vect.x = tmp;
}

function	rotate_z(vect, rot)
{
    var	tmp;
    var	angle;

    angle = (rot * Math.PI) / 180;
    tmp = vect.x * Math.cos(angle) - vect.y * Math.sin(angle);
    vect.y = vect.x * Math.sin(angle) + vect.y * Math.cos(angle);
    vect.x = tmp;
}
