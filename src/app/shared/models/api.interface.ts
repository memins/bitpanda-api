export interface SubAttributes {
  default_sell_amount: string;
  has_wallets: boolean;
  logo: string;
  logo_color: string;
  logo_dark: string;
  logo_white: string;
  name: string;
  numeric_character_reference: string;
  min_withdraw_euro: string;
  precision: number;
  symbol: string;
  symbol_character: string;
  to_eur_rate: string;
  wallet_min_withdrawal: string;
  name_deu: string;
  name_eng: string;
  name_fra: string;
  name_ita: string;
  name_spa: string;
  name_tur: string;
}

export interface Fiat {
  type: string;
  attributes: SubAttributes[];
  id: string;
}

export interface Bfc {
  type: string;
  attributes: Attributes;
}

export interface Aml {
  type: string;
  attributes;
}

export interface BestReward {
  type: string;
  attributes;
}

export interface PayoutProvider {
  type: string;
  attributes;
  id: string;
}

export interface AssetType {
  type: string;
  attributes;
  id: string;
}

export interface Commodity {
  type: string;
  attributes;
  id: string;
}

export interface Cryptocoin {
  type: string;
  attributes;
  id: string;
}

export interface Index {
  type: string;
  attributes;
  id: string;
}

export interface Language {
  type: string;
  attributes;
  id: string;
}

export interface Newsletter {
  type: string;
  attributes;
  id: string;
}

export interface Country {
  type: string;
  attributes;
  id: string;
}

export interface ProfileReportReason {
  type: string;
  attributes;
  id: string;
}

export interface VipLevelsThreshold {
  type: string;
  attributes;
  id: string;
}

export interface Attributes {
  bfc: Bfc[];
  aml: Aml[];
  best_rewards: BestReward[];
  payout_providers: PayoutProvider[];
  asset_types: AssetType[];
  asset_groups: any[];
  commodities: Commodity[];
  cryptocoins: Cryptocoin[];
  stocks: any[];
  indexes: Index[];
  fiats: Fiat[];
  languages: Language[];
  newsletters: Newsletter[];
  countries: Country[];
  profile_report_reasons: ProfileReportReason[];
  vip_levels_thresholds: VipLevelsThreshold[];
}

export interface Data {
  type: string;
  attributes: Attributes[];
}

export interface ApiInterface {
  data: Data[];
}
