//=============================================================================
// Params_Rank.js
//=============================================================================

/*:
 * @plugindesc 能力値を非表示にしたりランク表示にします。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 * プラグインコマンド：
 * RankShowFlag フラグ
 * フラグ
 * 有効： on
 * 無効： off
 *
 * パラメータ:
 * Params
 * ステータス画面に表示したい能力値
 * 先頭から順番に表示されます。
 * ＨＰ、ＭＰ、ＴＰは非表示になりません。
 *
 * OP_FontSize
 * ＨＰ、ＭＰ、ＴＰのフォントサイズ
 *
 * Params_FontSize
 * 能力値のフォントサイズ
 *
 * 「ATK」等の英字
 * 設定した数値以上なら指定したランクが表示されます。
 *
 * ○_Rank
 * ステータスに表示するランク。
 *
 * 例： デフォルトだと攻撃力２１、防御力２０なら攻撃力 Ｅ-、防御力 Ｆ になります。
 *
 * ○P_Flag
 * on にすると ○P で設定した文字に置き換わります。
 *
 * Flag
 * on の場合のみ「ランク」表示になります。
 *
 *
 * 仕様
 * ＨＰ、ＭＰ、ＴＰはランク表示されません。
 *
 *
 * readmeやスタッフロールの明記、使用報告は任意
 *
 * @param Flag
 * @desc ランク制を使用するか
 * デフォルト: on
 * @default on
 *
 * @param OP_FontSize
 * @desc ＨＰ、ＭＰ、ＴＰのフォントサイズ
 * デフォルト: 28
 * @default 28
 *
 * @param Params_FontSize
 * @desc 能力値のフォントサイズ
 * デフォルト: 28
 * @default 28
 *
 * @param Params
 * @desc 表示したいステータス
 * デフォルト: atk def mat mdf agi luk
 * @default atk def mat mdf agi luk
 *
 * @param ATK
 * @desc 「攻撃力」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param ATK_Rank
 * @desc 「攻撃力」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param DEF
 * @desc 「防御力」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param DEF_Rank
 * @desc 「防御力」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param MAT
 * @desc 「魔法力」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param MAT_Rank
 * @desc 「魔法力」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param MDF
 * @desc 「魔法防御」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param MDF_Rank
 * @desc 「魔法防御」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param AGI
 * @desc 「敏捷性」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param AGI_Rank
 * @desc 「敏捷性」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param LUK
 * @desc 「運」の数値
 * デフォルト: 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 * @default 0 20 30 40 50 60 70 80 90 100 110 120 130 140 150 160 170 180 200
 *
 * @param LUK_Rank
 * @desc 「運」に表示されるランク
 * デフォルト: F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 * @default F E- E E+ D- D D+ C- C C+ B- B B+ A- A A+ S- S S+
 *
 * @param HP_Flag
 * @desc ＨＰの数値を非表示
 * デフォルト: off
 * @default off
 
 * @param HP
 * @desc 表示される文字
 * デフォルト: ？？？
 * @default ？？？
 *
 * @param MP_Flag
 * @desc ＭＰの数値を非表示
 * デフォルト: off
 * @default off
 *
 * @param MP
 * @desc 表示される文字
 * デフォルト: ？？？
 * @default ？？？
 *
 * @param TP_Flag
 * @desc ＴＰの数値を非表示
 * デフォルト: off
 * @default off
 *
 * @param TP
 * @desc 表示される文字
 * デフォルト: ？？？
 * @default ？？？
 *
 */

var Params_Rank = Params_Rank || {};
Params_Rank.True   = true;
Params_Rank.Status = []; // 格納用に連想配列の作成
Params_Rank.Flag   = []; // 格納用に配列の作成
Params_Rank.Parameters = PluginManager.parameters('Params_Rank');
// 初期設定
var param = Params_Rank.Parameters["Params"].split(' '); // 空白で区切る
Params_Rank.Status[0] = [];
for(var n = 0; n < param.length; n++) {
	Params_Rank.Status[0].push(param[n]); // Params_Rank.Status[0] に表示するステータスを格納
}
// ATK
var value = Params_Rank.Parameters["ATK"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["ATK_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[2] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[2][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
// DEF
var value = Params_Rank.Parameters["DEF"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["DEF_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[3] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[3][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
// MAT
var value = Params_Rank.Parameters["MAT"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["MAT_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[4] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[4][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
// MDF
var value = Params_Rank.Parameters["MDF"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["MDF_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[5] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[5][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
// AGI
var value = Params_Rank.Parameters["AGI"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["AGI_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[6] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[6][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
// Luk
var value = Params_Rank.Parameters["LUK"].split(' '); // 空白で区切る
var rank  = Params_Rank.Parameters["LUK_Rank"].split(' '); // 空白で区切る
Params_Rank.Status[7] = {};
for(var n = 0; n < value.length; n++) {
	Params_Rank.Status[7][Number(value[n])] = rank[n] || ""; // Params_Rank.Status[0] に表示するステータスを格納
}
Params_Rank.Flag[0] = [Params_Rank.Parameters["HP_Flag"], Params_Rank.Parameters["HP"]];
Params_Rank.Flag[1] = [Params_Rank.Parameters["MP_Flag"], Params_Rank.Parameters["MP"]];
Params_Rank.Flag[2] = [Params_Rank.Parameters["TP_Flag"], Params_Rank.Parameters["TP"]];
Params_Rank.Flag[3] = Params_Rank.Parameters["Flag"];
Params_Rank.Flag[4] = [Params_Rank.Parameters["OP_FontSize"], Params_Rank.Parameters["Params_FontSize"]];

(function() {
	// プラグインコマンド
	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        switch(command) {
		case 'RankShowFlag':
			$gameSystem._params_rank_flag[0] = args[0];
			break;
        }
    };
	// 設定保存用
	var _Game_System_initialize_Rank = Game_System.prototype.initialize;
	Game_System.prototype.initialize = function() {
		_Game_System_initialize_Rank.call(this);
		this._params_rank_flag = []; // 初期化
		this._params_rank_flag[0]  = Params_Rank.Flag[3]; // ランクで表示フラグ
		this._params_rank_flag[1]  = []; // 能力値リスト
	};
	// ランク処理
	Window_Base.prototype.params_rank = function(paramId, param) {
		var rank;
		for (value in Params_Rank.Status[paramId]) {
			if (param > value) {
				rank = Params_Rank.Status[paramId][value];
			}
		}
		return rank;
	};
	// HP の描画
	var _Window_Base_drawActorHp_Rank = Window_Base.prototype.drawActorHp;
	Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
		if (Params_Rank.True) {
			width = width || 186;
			var color1 = this.hpGaugeColor1();
			var color2 = this.hpGaugeColor2();
			this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.hpA, x, y, 44);
			if (Params_Rank.Flag[0][0] !== "off") {
				var value = Params_Rank.Flag[0][1];
				this.changeTextColor(this.normalColor());
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawText(value, x + width - 64, y, 64, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
				this.hpColor(actor), this.normalColor());
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_Base_drawActorHp_Rank.call(this, actor, x, y, width);
		}
	};
	// MP の描画
	var _Window_Base_drawActorMp_Rank = Window_Base.prototype.drawActorMp;
	Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
		if (Params_Rank.True) {
			width = width || 186;
			var color1 = this.mpGaugeColor1();
			var color2 = this.mpGaugeColor2();
			this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.mpA, x, y, 44);
			if (Params_Rank.Flag[1][0] !== "off") {
				var value = Params_Rank.Flag[1][1];
				this.changeTextColor(this.normalColor());
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawText(value, x + width - 64, y, 64, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
							this.mpColor(actor), this.normalColor());
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_Base_drawActorMp_Rank.call(this, actor, x, y, width);
		}
	};
	// TP の描画
	var _Window_Base_drawActorTp_Rank = Window_Base.prototype.drawActorTp;
	Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
		if (Params_Rank.True) {
			width = width || 96;
			var color1 = this.tpGaugeColor1();
			var color2 = this.tpGaugeColor2();
			this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.tpA, x, y, 44);
			this.changeTextColor(this.tpColor(actor));
			if (Params_Rank.Flag[2][0] !== "off") {
				var value = Params_Rank.Flag[2][1];
				this.changeTextColor(this.normalColor());
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawText(value, x + width - 64, y, 64, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.contents.fontSize = Params_Rank.Flag[4][0]; // フォントサイズを変更
				this.drawText(actor.tp, x + width - 64, y, 64, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_Base_drawActorTp_Rank.call(this, actor, x, y, width);
		}
	};
	// 能力値表示の削除
	Window_Base.prototype.parametersDel = function() {
		if ($gameSystem._params_rank_flag[1].length === 0) { // 空なら作成
			var command = Params_Rank.Status[0];
			for(var n = 0; n < command.length; n++) {
				switch(command[n]) {
				case 'atk':
					$gameSystem._params_rank_flag[1].push(2);
					break;
				case 'def':
					$gameSystem._params_rank_flag[1].push(3);
					break;
				case 'mat':
					$gameSystem._params_rank_flag[1].push(4);
					break;
				case 'mdf':
					$gameSystem._params_rank_flag[1].push(5);
					break;
				case 'agi':
					$gameSystem._params_rank_flag[1].push(6);
					break;
				case 'luk':
					$gameSystem._params_rank_flag[1].push(7);
					break;
				}
			}
		}
		return $gameSystem._params_rank_flag[1];
	};
	// 能力値の描画
	var _Window_Status_drawParameters_Rank = Window_Status.prototype.drawParameters;
	Window_Status.prototype.drawParameters = function(x, y) {
		if (Params_Rank.True) {
			var lineHeight = this.lineHeight();
			var list = this.parametersDel();
			for (var i = 0; i < list.length; i++) {
				var paramId = list[i];
				var y2 = y + lineHeight * i;
				this.changeTextColor(this.systemColor());
				this.drawText(TextManager.param(paramId), x, y2, 160);
				this.resetTextColor();
				this.contents.fontSize = Params_Rank.Flag[4][1]; // フォントサイズを変更
				if ($gameSystem._params_rank_flag[0] === "on") {
					var rank = this.params_rank(paramId, this._actor.param(paramId));
					this.drawText(rank, x + 160, y2, 60, 'left');
				} else {
					this.drawText(this._actor.param(paramId), x + 160, y2, 60, 'right');
				}
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_Status_drawParameters_Rank.call(this, x, y);
		}
	};
	// リフレッシュ
	var _Window_EquipStatus_refresh_Rank = Window_EquipStatus.prototype.refresh;
	Window_EquipStatus.prototype.refresh = function() {
		if (Params_Rank.True) {
			this.contents.clear();
			if (this._actor) {
				this.drawActorName(this._actor, this.textPadding(), 0);
				var list = this.parametersDel();
				for (var i = 0; i < list.length; i++) {
					this.drawItem(0, this.lineHeight() * (1 + i), 2 + i);
				}
			}
		} else {
			return _Window_EquipStatus_refresh_Rank.call(this);
		}
	};
	// 現在の能力値を描画
	var _Window_EquipStatus_drawCurrentParam_Rank = Window_EquipStatus.prototype.drawCurrentParam;
	Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
		if (Params_Rank.True) {
			this.resetTextColor();
			this.contents.fontSize = Params_Rank.Flag[4][1]; // フォントサイズを変更
			if ($gameSystem._params_rank_flag[0] === "on") {
				var rank = this.params_rank(paramId, this._actor.param(paramId));
				this.drawText(rank, x, y, 48, 'left');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.drawText(this._actor.param(paramId), x, y, 48, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_EquipStatus_drawCurrentParam_Rank.call(this, x, y, paramId);
		}
	};
	// 装備変更後の能力値を描画
	var _Window_EquipStatus_drawNewParam_Rank = Window_EquipStatus.prototype.drawNewParam;
	Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
		if (Params_Rank.True) {
			var newValue = this._tempActor.param(paramId);
			var diffvalue = newValue - this._actor.param(paramId);
			this.changeTextColor(this.paramchangeTextColor(diffvalue));
			this.contents.fontSize = Params_Rank.Flag[4][1]; // フォントサイズを変更
			if ($gameSystem._params_rank_flag[0] === "on") {
				var rank = this.params_rank(paramId, newValue);
				this.drawText(rank, x, y, 48, 'left');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.drawText(newValue, x, y, 48, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_EquipStatus_drawNewParam_Rank.call(this, x, y, paramId);
		}
	};
	// アクターの能力値変化を描画
	var _Window_ShopStatus_drawActorParamChange_Rank = Window_ShopStatus.prototype.drawActorParamChange;
	Window_ShopStatus.prototype.drawActorParamChange = function(x, y, actor, item1) {
		if (Params_Rank.True) {
			var width = this.contents.width - this.textPadding() - x;
			var paramId = this.paramId();
			var change = this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
			this.changeTextColor(this.paramchangeTextColor(change));
			this.contents.fontSize = Params_Rank.Flag[4][1]; // フォントサイズを変更
			if ($gameSystem._params_rank_flag[0] === "on") {
				var old  = this.params_rank(paramId, actor.param(paramId));
				var rank = this.params_rank(paramId, actor.param(paramId) + change);
				this.drawText(old + "→" + rank, x, y, width, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			} else {
				this.drawText((change > 0 ? '+' : '') + change, x, y, width, 'right');
				this.contents.fontSize = this.standardFontSize(); // フォントサイズを元に戻す
			}
		} else {
			_Window_ShopStatus_drawActorParamChange_Rank.call(this, x, y, actor, item1);
		}
	};
})();