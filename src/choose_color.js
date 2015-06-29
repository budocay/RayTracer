function	choose_color2(col, col2, save_trans)
{
    col[0] = (col[0] + (col2[0] / save_trans)) / (1 / save_trans + 1);
    col[1] = (col[1] + (col2[1] / save_trans)) / (1 / save_trans + 1);
    col[2] = (col[2] + (col2[2] / save_trans)) / (1 / save_trans + 1);
    col[3] = 255;
    return (col);
}

function	choose_color3(obj, tab)
{
    var a;
    var cmp;

    cmp = Infinity;
    a = -1;
    obj = Infinity;
    while (tab[++a])
	if (tab[a].k < cmp && tab[a].k !== null && tab[a].k > 0)
    {
	cmp = tab[a].k;
	obj = a;
    }
    return (obj);
}

function	choose_color4(core, tab, light, obj)
{
    var col2 = [];

    col2 = [0, 0, 0, 255];
    if (tab[obj] != null)
    {
	col2 = lumis(tab[obj], core, light);
	col2 = shadow(tab[obj], core, pos(light.l1x, light.l1y, light.l1z),
		      col2);
    }
    return (col2);
}

function	choose_color5(col, save_trans, obj, p)
{
    if (col[0] == null)
    {
	if (obj != null)
	    save_trans = obj.trans;
	col[0] = col[1];
    }
    else
    {
	col[0] = choose_color2(col[0], col[1], save_trans);
	if (obj != null)
	    save_trans = obj.trans * p;
    }
    col[1] = save_trans;
    if (save_trans > 10)
	col[2]++;
    return (col);
}

function	choose_color(core, tab, light)
{
    var obj;
    var col = [];
    var col2 = [];
    var i;
    var save_trans;
    var p;

    i = 0;
    p = 0;
    save_trans = 1;
    col = null;
    while (i < 1 && p == p++)
    {
	obj = choose_color3(obj, tab);
	col2 = choose_color4(core, tab, light, obj);
	if (tab[obj] != null)
	    tab[obj].k = null;
	else
	    i++;
	obj = choose_color5([col, col2, i], save_trans, tab[obj], p);
	col = obj[0];
	save_trans = obj[1];
	i = obj[2];
    }
    return (col);
}
