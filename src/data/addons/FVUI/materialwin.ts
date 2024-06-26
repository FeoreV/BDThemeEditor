import type { Addon } from '$types/addon/FVUI';
import FeoreV from '$data/devs/FeoreV';

const addon: Addon = {
	name: 'Addon - MaterialWin',
	description: 'NOT DISPLAYED IN THE EDITOR. The theme color scheme adjusts to the windows colorscheme color',
	developer: FeoreV,
	imports: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/MaterialWin.css'],
	previewUrl: ['https://feorev.github.io/Themes/Discord/FVUI/Addons/MaterialWin.css'],
	group: 'MaterialYou',
	selector: 'MaterialWin',
	use: false
};

export default addon;
