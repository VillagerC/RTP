//=============================================================================
// Params_Rank.js
//=============================================================================

/*:
 * @plugindesc ステータスをランク表示にします。
 * @author 村人C
 *
 * @help
 *
 * 使い方
 * コマンド:
 * 「Ｆ」等の英字
 * ステータスに表示するランク。
 *
 * ○_Rank
 * 設定した数値以上なら表示されます。
 *
 * 例： デフォルトだと攻撃力２１、防御力２０なら攻撃力 Ｅ-、防御力 Ｆ になります。
 *
 * ○P_Flag
 * on にすると ○P で設定した文字に置き換わります。
 *
 * Flag
 * on の場合のみ本プラグインが動作します。
 *
 *
 * 仕様
 * ＨＰ、ＭＰ、ＴＰはランク表示されません。
 *
 *
 * readmeやスタッフロールの明記、使用報告は任意
 *
 * @param Flag
 * @desc 本プラグインを使用するか
 * デフォルト: on
 * @default on
 *
 * @param F
 * @desc 表示されるランク
 * デフォルト: F
 * @default F
 *
 * @param E-
 * @desc 表示されるランク
 * デフォルト: E-
 * @default E-
 *
 * @param E-_Rank
 * @desc 数値
 * デフォルト: 20
 * @default 20
 *
 * @param E
 * @desc 表示されるランク
 * デフォルト: E
 * @default E
 *
 * @param E_Rank
 * @desc 数値
 * デフォルト: 30
 * @default 30
 *
 * @param E+
 * @desc 表示されるランク
 * デフォルト: E+
 * @default E+
 *
 * @param E+_Rank
 * @desc 数値
 * デフォルト: 40
 * @default 40
 *
 * @param D-
 * @desc 表示されるランク
 * デフォルト: D-
 * @default D-
 *
 * @param D-_Rank
 * @desc 数値
 * デフォルト: 50
 * @default 50
 *
 * @param D
 * @desc 表示されるランク
 * デフォルト: D
 * @default D
 *
 * @param D_Rank
 * @desc 数値
 * デフォルト: 60
 * @default 60
 *
 * @param D+
 * @desc 表示されるランク
 * デフォルト: D+
 * @default D+
 *
 * @param D+_Rank
 * @desc 数値
 * デフォルト: 70
 * @default 70
 *
 * @param C-
 * @desc 表示されるランク
 * デフォルト: C-
 * @default C-
 *
 * @param C-_Rank
 * @desc 数値
 * デフォルト: 80
 * @default 80
 *
 * @param C
 * @desc 表示されるランク
 * デフォルト: C
 * @default C
 *
 * @param C_Rank
 * @desc 数値
 * デフォルト: 90
 * @default 90
 *
 * @param C+
 * @desc 表示されるランク
 * デフォルト: C+
 * @default C+
 *
 * @param C+_Rank
 * @desc 数値
 * デフォルト: 100
 * @default 100
 *
 * @param B-
 * @desc 表示されるランク
 * デフォルト: B-
 * @default B-
 *
 * @param B-_Rank
 * @desc 数値
 * デフォルト: 110
 * @default 110
 *
 * @param B
 * @desc 表示されるランク
 * デフォルト: B
 * @default B
 *
 * @param B_Rank
 * @desc 数値
 * デフォルト: 120
 * @default 120
 *
 * @param B+
 * @desc 表示されるランク
 * デフォルト: B+
 * @default B+
 *
 * @param B+_Rank
 * @desc 数値
 * デフォルト: 130
 * @default 130
 *
 * @param A-
 * @desc 表示されるランク
 * デフォルト: A-
 * @default A-
 *
 * @param A-_Rank
 * @desc 数値
 * デフォルト: 140
 * @default 140
 *
 * @param A
 * @desc 表示されるランク
 * デフォルト: A
 * @default A
 *
 * @param A_Rank
 * @desc 数値
 * デフォルト: 150
 * @default 150
 *
 * @param A+
 * @desc 表示されるランク
 * デフォルト: A+
 * @default A+
 *
 * @param A+_Rank
 * @desc 数値
 * デフォルト: 160
 * @default 160
 *
 * @param S-
 * @desc 表示されるランク
 * デフォルト: S-
 * @default S-
 *
 * @param S-_Rank
 * @desc 数値
 * デフォルト: 170
 * @default 170
 *
 * @param S
 * @desc 表示されるランク
 * デフォルト: S
 * @default S
 *
 * @param S_Rank
 * @desc 数値
 * デフォルト: 180
 * @default 180
 *
 * @param S+
 * @desc 表示されるランク
 * デフォルト: S+
 * @default S+
 *
 * @param S+_Rank
 * @desc 数値
 * デフォルト: 200
 * @default 200
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
Params_Rank.Status = {}; // 格納用に連想配列の作成
Params_Rank.Flag   = []; // 格納用に配列の作成
Params_Rank.Parameters = PluginManager.parameters('Params_Rank');
// 初期設定
Params_Rank.Status[0] = Params_Rank.Parameters["F"]  || "F";
Params_Rank.Status[Number(Params_Rank.Parameters["E-_Rank"]) || 20]  = Params_Rank.Parameters["E-"]  || "E-";
Params_Rank.Status[Number(Params_Rank.Parameters["E_Rank"])  || 30]  = Params_Rank.Parameters["E"]   || "E";
Params_Rank.Status[Number(Params_Rank.Parameters["E+_Rank"]) || 40]  = Params_Rank.Parameters["E+"]  || "E+";
Params_Rank.Status[Number(Params_Rank.Parameters["D-_Rank"]) || 50]  = Params_Rank.Parameters["D-"]  || "D-";
Params_Rank.Status[Number(Params_Rank.Parameters["D_Rank"])  || 60]  = Params_Rank.Parameters["D"]   || "D";
Params_Rank.Status[Number(Params_Rank.Parameters["D+_Rank"]) || 70]  = Params_Rank.Parameters["D+"]  || "D+";
Params_Rank.Status[Number(Params_Rank.Parameters["C-_Rank"]) || 80]  = Params_Rank.Parameters["C-"]  || "C-";
Params_Rank.Status[Number(Params_Rank.Parameters["C_Rank"])  || 90]  = Params_Rank.Parameters["C"]   || "C";
Params_Rank.Status[Number(Params_Rank.Parameters["C+_Rank"]) || 100] = Params_Rank.Parameters["C+"]  || "C+";
Params_Rank.Status[Number(Params_Rank.Parameters["B-_Rank"]) || 110] = Params_Rank.Parameters["B-"]  || "B-";
Params_Rank.Status[Number(Params_Rank.Parameters["B_Rank"])  || 120] = Params_Rank.Parameters["B"]   || "B";
Params_Rank.Status[Number(Params_Rank.Parameters["B+_Rank"]) || 130] = Params_Rank.Parameters["B+"]  || "B+";
Params_Rank.Status[Number(Params_Rank.Parameters["A-_Rank"]) || 140] = Params_Rank.Parameters["A-"]  || "A-";
Params_Rank.Status[Number(Params_Rank.Parameters["A_Rank"])  || 150] = Params_Rank.Parameters["A"]   || "A";
Params_Rank.Status[Number(Params_Rank.Parameters["A+_Rank"]) || 160] = Params_Rank.Parameters["A+"]  || "A+";
Params_Rank.Status[Number(Params_Rank.Parameters["S-_Rank"]) || 170] = Params_Rank.Parameters["S-"]  || "S-";
Params_Rank.Status[Number(Params_Rank.Parameters["S_Rank"])  || 180] = Params_Rank.Parameters["S"]   || "S";
Params_Rank.Status[Number(Params_Rank.Parameters["S+_Rank"]) || 200] = Params_Rank.Parameters["S+"]  || "S+";
Params_Rank.Flag[0] = [Params_Rank.Parameters["HP_Flag"], Params_Rank.Parameters["HP"]];
Params_Rank.Flag[1] = [Params_Rank.Parameters["MP_Flag"], Params_Rank.Parameters["MP"]];
Params_Rank.Flag[2] = [Params_Rank.Parameters["TP_Flag"], Params_Rank.Parameters["TP"]];
Params_Rank.Flag[3] = Params_Rank.Parameters["Flag"];

(function() {
	// ランク処理
	Window_Base.prototype.params_rank = function(param) {
		var rank = Params_Rank.Status[0];
		for(key in Params_Rank.Status) {
			if (param > key) {
				rank = Params_Rank.Status[key];
			}
		}
		return rank;
	};
	// HP の描画
	var _Window_Base_drawActorHp_Rank = Window_Base.prototype.drawActorHp;
	Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
		if (Params_Rank.Flag[3] === "on") {
			width = width || 186;
			var color1 = this.hpGaugeColor1();
			var color2 = this.hpGaugeColor2();
			this.drawGauge(x, y, width, actor.hpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.hpA, x, y, 44);
			if (Params_Rank.Flag[0][0] !== "off") {
				var value = Params_Rank.Flag[0][1];
				this.changeTextColor(this.normalColor());
				this.drawText(value, x + width - 64, y, 64, 'right');
			} else {
				this.drawCurrentAndMax(actor.hp, actor.mhp, x, y, width,
							this.hpColor(actor), this.normalColor());
			}
		} else {
			_Window_Base_drawActorHp_Rank.call(this, actor, x, y, width);
		}
	};
	// MP の描画
	var _Window_Base_drawActorMp_Rank = Window_Base.prototype.drawActorMp;
	Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
		if (Params_Rank.Flag[3] === "on") {
			width = width || 186;
			var color1 = this.mpGaugeColor1();
			var color2 = this.mpGaugeColor2();
			this.drawGauge(x, y, width, actor.mpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.mpA, x, y, 44);
			if (Params_Rank.Flag[1][0] !== "off") {
				var value = Params_Rank.Flag[1][1];
				this.changeTextColor(this.normalColor());
				this.drawText(value, x + width - 64, y, 64, 'right');
			} else {
				this.drawCurrentAndMax(actor.mp, actor.mmp, x, y, width,
							this.mpColor(actor), this.normalColor());
			}
		} else {
			_Window_Base_drawActorMp_Rank.call(this, actor, x, y, width);
		}
	};
	// TP の描画
	var _Window_Base_drawActorTp_Rank = Window_Base.prototype.drawActorTp;
	Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
		if (Params_Rank.Flag[3] === "on") {
			width = width || 96;
			var color1 = this.tpGaugeColor1();
			var color2 = this.tpGaugeColor2();
			this.drawGauge(x, y, width, actor.tpRate(), color1, color2);
			this.changeTextColor(this.systemColor());
			this.drawText(TextManager.tpA, x, y, 44);
			this.changeTextColor(this.tpColor(actor));
			if (Params_Rank.Flag[2][0] !== "off") {
				var value = Params_Rank.Flag[2][1];
				this.drawText(value, x + width - 64, y, 64, 'right');
			} else {
				this.drawText(actor.tp, x + width - 64, y, 64, 'right');
			}
		} else {
			_Window_Base_drawActorTp_Rank.call(this, actor, x, y, width);
		}
	};
	// 能力値の描画
	var _Window_Status_drawParameters_Rank = Window_Status.prototype.drawParameters;
	Window_Status.prototype.drawParameters = function(x, y) {
		if (Params_Rank.Flag[3] === "on") {
			var lineHeight = this.lineHeight();
			for (var i = 0; i < 6; i++) {
				var paramId = i + 2;
				var y2 = y + lineHeight * i;
				this.changeTextColor(this.systemColor());
				this.drawText(TextManager.param(paramId), x, y2, 160);
				this.resetTextColor();
				var rank = this.params_rank(this._actor.param(paramId));
				this.drawText(rank, x + 160, y2, 60, 'left');
			}
		} else {
			_Window_Status_drawParameters_Rank.call(this, x, y);
		}
	};
	// 現在の能力値を描画
	var _Window_EquipStatus_drawCurrentParam_Rank = Window_EquipStatus.prototype.drawCurrentParam;
	Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramId) {
		if (Params_Rank.Flag[3] === "on") {
			this.resetTextColor();
			var rank = this.params_rank(this._actor.param(paramId));
			this.drawText(rank, x, y, 48, 'left');
		} else {
			_Window_EquipStatus_drawCurrentParam_Rank.call(this, x, y, paramId);
		}
	};
	// 装備変更後の能力値を描画
	var _Window_EquipStatus_drawNewParam_Rank = Window_EquipStatus.prototype.drawNewParam;
	Window_EquipStatus.prototype.drawNewParam = function(x, y, paramId) {
		if (Params_Rank.Flag[3] === "on") {
			var newValue = this._tempActor.param(paramId);
			var diffvalue = newValue - this._actor.param(paramId);
			this.changeTextColor(this.paramchangeTextColor(diffvalue));
			var rank = this.params_rank(newValue);
			this.drawText(rank, x, y, 48, 'left');
		} else {
			_Window_EquipStatus_drawNewParam_Rank.call(this, x, y, paramId);
		}
	};
	// アクターの能力値変化を描画
	var _Window_ShopStatus_drawActorParamChange_Rank = Window_ShopStatus.prototype.drawActorParamChange;
	Window_ShopStatus.prototype.drawActorParamChange = function(x, y, actor, item1) {
		if (Params_Rank.Flag[3] === "on") {
			var width = this.contents.width - this.textPadding() - x;
			var paramId = this.paramId();
			var change = this._item.params[paramId] - (item1 ? item1.params[paramId] : 0);
			this.changeTextColor(this.paramchangeTextColor(change));
			var old  = this.params_rank(actor.param(paramId));
			var rank = this.params_rank(actor.param(paramId) + change);
			this.drawText(old + "→" + rank, x, y, width, 'right');
		} else {
			_Window_ShopStatus_drawActorParamChange_Rank.call(this, x, y, actor, item1);
		}
	};
})();