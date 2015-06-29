/*
** Ajouter une nouvelle lumière :
** add des nouvelles positions dans la structure
** calculer de nouveaux vecteurs dans lumis && light_vector, puis un nouveau cosinus et le comparer aux autres
** rappeller la fonction d'ombre dans choose_color avec la nouvelle lumière
*/

function lumis(object, core, lights)
{
    var vl;
    var cosa;
    var color = [];
    var normal_obj;

    vl = light_vector(core, object, 2, lights);
    if (object.typ == 1)
	normal_obj = normal_for_sphere(core, object, lights);
    else if (object.typ == 2)
	normal_obj = normal_for_cone(core, object, lights);
    else if (object.typ == 3)
	normal_obj = normal_for_plan(core, object);
    else if (object.typ == 4)
	normal_obj = normal_for_ellypse(core, object, lights);
    else if (object.typ == 5)
	normal_obj = normal_for_cyl(core, object, lights);
    color = reflex(object, core, normal_obj, [[object.colorA, object.colorB,
					       object.colorC], lights]);
    cosa = calc_cosa(core, vl, normal_obj);
    color = change_color(object, cosa, color);
    return (color);
}

function which_light(tab)
{
    var a;
    var cmp;

    a = 0;
    cmp = tab[0];
    while (tab[a])
    {
	if (cmp < tab[a])
	    cmp = tab[a];
	a++;
    }
    return (cmp);
}

function calc_cosa(core, vl, normal_obj)
{
    var scalaire;
    var norm_vl;
    var norm_norm;
    var cosa;

    scalaire = (vl.x * normal_obj.x) + (vl.y * normal_obj.y) +
	(vl.z * normal_obj.z);
    norm_vl = Math.sqrt((vl.x * vl.x) + (vl.y * vl.y) + (vl.z * vl.z));
    norm_norm = Math.sqrt((normal_obj.x * normal_obj.x) +
			  (normal_obj.y * normal_obj.y) +
			  (normal_obj.z * normal_obj.z));
    cosa = scalaire / (norm_vl * norm_norm);
    if (cosa <= core.ambiant)
	cosa = core.ambiant;
    return (cosa);
}

function light_vector(core, object, call, lights)
{
    var px;
    var py;
    var pz;
    var intersec;
    var vl;
    var vl2;

    px = core.eye.x + (object.k * core.vis.x);
    py = core.eye.y + (object.k * core.vis.y);
    pz = core.eye.z + (object.k * core.vis.z);
    intersec = pos(px, py, pz);
    vl = pos((lights.l1x - px), (lights.l1y - py), (lights.l1z - pz));
    vl2 = pos((lights.l2x - px), (lights.l2y) - py, (lights.l2z - pz));
    if (call == 1)
	return (intersec);
    else if (call == 2)
	return (vl);
    else if (call == 3)
	return (vl2);
}
