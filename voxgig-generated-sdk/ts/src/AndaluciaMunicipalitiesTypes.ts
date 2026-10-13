// Typed models for the AndaluciaMunicipalities SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Municipality {
  id?: string
}

export interface MunicipalityLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'all' | 'count' | 'generate_file' | 'search'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MunicipalityCreateData {
  id?: string

  // Selects a custom action instead of the plain create:
  //   'search'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface OptionValue {
}

export interface OptionValueLoadMatch {

  // Selects a custom action instead of the plain load:
  //   'municipality_name'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

