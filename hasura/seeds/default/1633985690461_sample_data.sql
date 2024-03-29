SET check_function_bodies = false;
INSERT INTO public.areas (id, title) VALUES ('fa051057-9261-48f8-8dd0-d1af594c27f7', 'Roof');
INSERT INTO public.areas (id, title) VALUES ('6cf88bbf-8df3-4fb8-b88b-6ba26720e850', 'Walls');
INSERT INTO public.areas (id, title) VALUES ('e414a766-40e1-484b-8907-4c4f99eaa7e6', 'Decks and Balconies');
INSERT INTO public.areas (id, title) VALUES ('bb1e941c-0d19-463b-bb92-2c6ee4835c7c', 'Foundations and Subfloor');
INSERT INTO public.areas (id, title) VALUES ('b7fb1c96-6c1b-4da8-aaf5-2b6374a2b8ad', 'Services');
INSERT INTO public.areas (id, title) VALUES ('483d772c-6a6d-4670-baec-3654e27bf7b7', 'Interior');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('d1446ada-de76-4b31-961e-eb86ab953996', 'Check and wash roof', 'fa051057-9261-48f8-8dd0-d1af594c27f7', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('9084f9c4-e22b-4061-a8bc-71de118068a6', 'Check and clean gutters', 'fa051057-9261-48f8-8dd0-d1af594c27f7', 'Remove any overhanging tree branches. Check for blockages during heavy rain.', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('348e2e35-f5ef-47fa-862e-56c7e0201fd7', 'Check and wash solar panels', 'fa051057-9261-48f8-8dd0-d1af594c27f7', '', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('c286875a-d1b8-4547-b4ce-fba91ae8a87c', 'Repaint wall cladding', '6cf88bbf-8df3-4fb8-b88b-6ba26720e850', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('90b8a4e1-a60d-4c11-8958-6626bf44a8a1', 'Check and wash windows', '6cf88bbf-8df3-4fb8-b88b-6ba26720e850', 'Check for damaged putty or flaking paint, it''ll rot wooden windows and reduce the insulation value.', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('f5886bc7-7f89-4399-b806-edf98b761ab8', 'Clean moss from timber decks', 'e414a766-40e1-484b-8907-4c4f99eaa7e6', '', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('10a625e6-a63b-4f16-9999-c7aa3d732c25', 'Check for loose posts and balustrades on decks', 'e414a766-40e1-484b-8907-4c4f99eaa7e6', '', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('a7d7280a-4027-4187-b3c8-085e27553ed2', 'Clear plants from foundation walls', 'bb1e941c-0d19-463b-bb92-2c6ee4835c7c', '', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('f0dcda5b-2f12-493d-ad99-f5cced092cfc', 'Check and clear blockages on balconies and decks', 'e414a766-40e1-484b-8907-4c4f99eaa7e6', '', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('36b3047b-3f11-476e-9165-87813df9d6ce', 'Check piles for rot and corrosion', 'bb1e941c-0d19-463b-bb92-2c6ee4835c7c', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('f332cc34-1dc0-47ed-8ed3-f371c32ec157', 'Check for loose wires and pipes in subfloor', 'bb1e941c-0d19-463b-bb92-2c6ee4835c7c', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('d50efc59-df4c-44a1-9574-31a4c10d8e95', 'Nudge the water cylinder valve', 'b7fb1c96-6c1b-4da8-aaf5-2b6374a2b8ad', 'Nudge the lever of the temperature/pressure relief valve to ensure it stays moveable', 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('00693955-beab-4799-b816-a7a84d9d885a', 'Sweep chimney or flue', 'fa051057-9261-48f8-8dd0-d1af594c27f7', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('bb905a19-e830-4980-9429-0be8e8fe6aff', 'Check and wash walls', '6cf88bbf-8df3-4fb8-b88b-6ba26720e850', NULL, 'P1Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('253fe2fd-abf1-485e-86dd-69796cf224da', 'Repaint roof', 'fa051057-9261-48f8-8dd0-d1af594c27f7', 'Within 8-15 years depending on roof finish', 'P8Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('07fe3c34-56dc-47d6-83fd-b79e15e45aa0', 'Clear drains and gulley traps', 'b7fb1c96-6c1b-4da8-aaf5-2b6374a2b8ad', '', 'P3M');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('161b0e3e-ad8a-4542-a32c-faf123987b7f', 'Change the anode rod in your water cylinder', 'b7fb1c96-6c1b-4da8-aaf5-2b6374a2b8ad', 'Only required for glass-lined cylinders, and performed by a plumber', 'P5Y');
INSERT INTO public.templates (id, title, area_id, description, "interval") VALUES ('bdd317da-febe-4464-81a1-8ce5b0054a92', 'Replace hot water cylinder', 'b7fb1c96-6c1b-4da8-aaf5-2b6374a2b8ad', NULL, 'P15Y');
