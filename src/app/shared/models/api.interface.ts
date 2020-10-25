export interface Attributes {
  bfc_deduction: string;
  bfc_min_value_eur: number;
  bfc_enabled: boolean;
  bfc_upselling_lower_limit: string;
  bfc_upselling_best_recommended_lower_factor: number;
  bfc_upselling_best_recommended_upper_factor: number;
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

export interface Fiat {
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
  attributes: Attributes;
}

export interface apiInterface {
  data: Data;
}
