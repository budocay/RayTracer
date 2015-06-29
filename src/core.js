function choose_object(core, lights, type)
{
    var tab = [];
    var color = [];
    var c;

    c = 0;
    tab = list_object(core, tab, c);
    if (type == 1)
	return (tab);
    else
    {
	color = choose_color(core, tab, lights);
	return (color);
    }
}

function	k_valor(delta, a, b)
{
    var neg;
    var pos;
    var k;

    if (delta >= 0)
    {
	pos = (-b + Math.sqrt(delta)) / (2 * a);
	neg = (-b - Math.sqrt(delta)) / (2 * a);
	if (pos < neg && pos >= 0)
	    k = pos;
	else if (neg < pos && neg >= 0)
	    k = neg;
	else
	    return (0);
	return (k);
    }
    else
	return (0);
}

function    find_little(t1, t2)
{
    var     t;

    if (t1 <= Number.EPSILLON)
	t = t2;
    else
    {
	if (t2 <= Number.EPSILLON)
	    t = t1;
	else
	    t = (t1 < t2) ? t1 : t2;
    }
    return (t);
}

function	change_color(object, cosa, color)
{
    var new_color = [];
    var fact_bri;

    fact_bri = object.bri;
    new_color[0] = color[0] * (cosa * (255/255));
    new_color[1] = color[1] * (cosa * (255/255));
    new_color[2] = color[2] * (cosa * (255/255));
    new_color[0] = new_color[0] + (fact_bri * new_color[0] * cosa);
    new_color[1] = new_color[1] + (fact_bri * new_color[1] * cosa);
    new_color[2] = new_color[2] + (fact_bri * new_color[2] * cosa);
    if (object.refl != 0)
    {
	new_color[0] = new_color[0] * object.refl;
	new_color[1] = new_color[1] * object.refl;
	new_color[2] = new_color[2] * object.refl;
    }
    new_color[3] = 255;
    return (new_color);
}
